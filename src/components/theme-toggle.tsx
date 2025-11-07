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
            className="fixed top-4 right-4 z-50"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="size-5" />
            ) : (
                <Sun className="size-5" />
            )}
        </Button>
    );
}
