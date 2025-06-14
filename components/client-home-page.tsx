'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToolHome } from '@/components/tool-home';
import { Header } from '@/components/ui/header';
import { CommandPalette } from '@/components/ui/command-palette';
import { useCommandPalette } from '@/hooks/use-command-palette';

export function ClientHomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { open, setOpen, openCommandPalette } = useCommandPalette();

  // 处理工具选择 - 跳转到对应路由
  const handleToolSelect = (toolId: string) => {
    router.push(`/tools/${toolId}`);
  };

  // 进入工具列表页面
  const handleShowToolList = () => {
    router.push('/tools');
  };

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      {/* Header */}
      <Header
        variant='home'
        onShowToolList={handleShowToolList}
        onCommandPaletteTrigger={openCommandPalette}
      />

      {/* Main Content */}
      <main className='w-full'>
        <ToolHome
          onToolSelect={handleToolSelect}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCommandPaletteTrigger={openCommandPalette}
        />
      </main>

      {/* 统一的命令面板 */}
      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
}
