"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { routes } from '@/app/resources';
import { Flex, Spinner } from '@/once-ui/components';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const pathname = usePathname();
    const [isRouteEnabled, setIsRouteEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const performChecks = async () => {
            setLoading(true);
            setIsRouteEnabled(false);

            const checkRouteEnabled = () => {
                if (!pathname) return false;

                if (pathname in routes) {
                    return routes[pathname as keyof typeof routes];
                }

                return false;
            };

            const routeEnabled = checkRouteEnabled();
            setIsRouteEnabled(routeEnabled);
            setLoading(false);
        };

        performChecks();
    }, [pathname]);

    if (loading || !isRouteEnabled) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    return <>{children}</>;
};

export { RouteGuard };