"use client";
import { CreateOrganizationDialog } from '@/components/CreateOrganizationDialog'
import useUser from "@/app/hook/useUser";
import React from 'react'
import { supabaseBrowser } from '@/lib/supabase/browser';
import { OrgSelector } from '@/components/OrgSelector';
import { OrganizationProvider, useOrganization } from '@/contexts/OrganizationContext';

export default function page() {
  const { isFetching, data: user, error } = useUser();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user data.</div>;
  }


  return (
    <OrganizationProvider>
      <div>Dashboard
      <CreateOrganizationDialog user={user}/>
      <OrgSelector user={user}/>
    </div>
    </OrganizationProvider>
      
    
    
  )
}