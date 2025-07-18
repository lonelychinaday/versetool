'use client';

import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocaleContext } from '@/components/locale-provider';
import { useTranslation } from '@/hooks/use-translation';
import { locales, type Locale } from '@/i18n';

export function LanguageSwitch() {
  const { locale, changeLocale } = useLocaleContext();
  const { ts } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='h-8 w-8 p-0'
          title={ts('common.language', 'Language')}
        >
          <Languages className='h-4 w-4' />
          <span className='sr-only'>{ts('common.language', 'Language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(locales).map(([key, config]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => changeLocale(key as Locale)}
            className={locale === key ? 'bg-accent' : ''}
          >
            {config.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
