import { useEffect, useState } from 'react';
import liff from '@line/liff';
import { LINE_CONFIG } from '../config/line';
import { supabase } from '../lib/supabase';

export interface LineProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

export function useAuth() {
  const [profile, setProfile] = useState<LineProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeLiff();
  }, []);

  const initializeLiff = async () => {
    try {
      await liff.init({ liffId: LINE_CONFIG.liffId });
      if (liff.isLoggedIn()) {
        const lineProfile = await liff.getProfile();
        const profile = {
          userId: lineProfile.userId,
          displayName: lineProfile.displayName,
          pictureUrl: lineProfile.pictureUrl,
          statusMessage: lineProfile.statusMessage,
        };
        setProfile(profile);
        
        // Check if user is admin
        const { data, error } = await supabase
          .from('admins')
          .select('*')
          .eq('line_user_id', profile.userId)
          .single();
        
        if (error) {
          console.error('Error checking admin status:', error);
        } else {
          setIsAdmin(!!data);
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  };

  const logout = () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      setProfile(null);
      setIsAdmin(false);
    }
  };

  return {
    profile,
    isAdmin,
    loading,
    error,
    login,
    logout,
  };
}
