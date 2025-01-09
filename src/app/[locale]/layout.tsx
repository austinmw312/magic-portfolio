import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';

import { effects, style } from '@/app/resources'

import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Background, Flex } from "@/once-ui/components";

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

interface LayoutProps {
	children: React.ReactNode;
	params: {locale: string};
}

export default async function Layout({
	children,
	params: {locale}
} : LayoutProps) {
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages} locale={locale}>
			<Flex
				as="html" lang="en"
				background="page"
				data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
				data-solid={style.solid} data-solid-style={style.solidStyle}
				data-theme={style.theme}
				data-border={style.border}
				data-surface={style.surface}
				data-transition={style.transition}
				className={classNames(
					primary.variable,
					secondary ? secondary.variable : '',
					tertiary ? tertiary.variable : '',
					code.variable)}>
				<Flex style={{minHeight: '100vh'}}
					as="body"
					fillWidth margin="0" padding="0"
					direction="column">
					<Background
						mask={effects.mask as any}
						gradient={effects.gradient as any}
						dots={effects.dots as any}
						lines={effects.lines as any}/>
					<Flex
						fillWidth
						minHeight="16">
					</Flex>
					<Flex
						zIndex={0}
						fillWidth paddingY="l" paddingX="l"
						justifyContent="center" flex={1}>
						<Flex
							justifyContent="center"
							fillWidth minHeight="0">
							{children}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</NextIntlClientProvider>
	);
}