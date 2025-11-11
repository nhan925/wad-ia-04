import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="fixed top-3 right-3 md:top-4 md:right-4 z-50 size-9 md:size-10"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="size-4 md:size-5" />
            ) : (
                <Sun className="size-4 md:size-5" />
            )}
        </Button>
    );
}
