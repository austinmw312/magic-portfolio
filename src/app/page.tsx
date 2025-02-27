import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text, RevealFx } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Experience = {
  company: string;
  timeframe: string;
  role: string;
  achievements: (string | JSX.Element)[];
  images: ProjectImage[];
};

export default function About(
    { params: {locale}}: { params: { locale: string }}
) {
    const {person, about, social } = renderContent();
    const structure = [
        { 
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        { 
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        { 
            title: about.projects.title,
            display: about.projects.display,
            items: about.projects.list.map(project => project.title)
        },
        { 
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        { 
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            { about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={about} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                { about.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <RevealFx translateY="8" delay={0.2}>
                            <Avatar
                                src={person.avatar}
                                size="xl"/>
                            <Flex
                                gap="8"
                                alignItems="center">
                                <Icon
                                    onBackground="accent-weak"
                                    name="globe"/>
                                {person.location}
                            </Flex>
                            { person.languages.length > 0 && (
                                <Flex
                                    wrap
                                    gap="8">
                                    {person.languages.map((language, index) => (
                                        <Tag
                                            key={index}
                                            size="l">
                                            {language}
                                        </Tag>
                                    ))}
                                </Flex>
                            )}
                        </RevealFx>
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        <RevealFx translateY="12" delay={0.3}>
                            {about.calendar.display && (
                                <Flex
                                    className={styles.blockAlign}
                                    style={{
                                        backdropFilter: 'blur(var(--static-space-1))',
                                        border: '1px solid var(--brand-alpha-medium)',
                                        width: 'fit-content'
                                    }}
                                    alpha="brand-weak" radius="full"
                                    fillWidth padding="4" gap="8" marginBottom="m"
                                    alignItems="center">
                                    <Flex paddingLeft="12">
                                        <Icon
                                            name="calendar"
                                            onBackground="brand-weak"/>
                                    </Flex>
                                    <Flex
                                        paddingX="8">
                                        Schedule a call
                                    </Flex>
                                    <IconButton
                                        href={about.calendar.link}
                                        data-border="rounded"
                                        variant="tertiary"
                                        icon="chevronRight"/>
                                </Flex>
                            )}
                            <Heading
                                className={styles.textAlign}
                                variant="display-strong-xl">
                                {person.name}
                            </Heading>
                            <Text
                                className={styles.textAlign}
                                variant="display-default-xs"
                                onBackground="neutral-weak">
                                {person.role}
                            </Text>
                            {social.length > 0 && (
                                <Flex
                                    className={styles.blockAlign}
                                    paddingTop="20" paddingBottom="8" gap="8" wrap>
                                    {social.map((item) => (
                                        item.link && (
                                            <Button
                                                key={item.name}
                                                href={item.link}
                                                prefixIcon={item.icon}
                                                label={item.name}
                                                size="s"
                                                variant="tertiary"
                                                target={item.link.startsWith('mailto:') ? '_blank' : undefined}/>
                                        )
                                    ))}
                                </Flex>
                            )}
                        </RevealFx>
                    </Flex>

                    { about.intro.display && (
                        <RevealFx translateY="12" delay={0.3}>
                            <Flex
                                direction="column"
                                textVariant="body-default-l"
                                fillWidth gap="m" marginBottom="xl">
                                {about.intro.description}
                            </Flex>
                        </RevealFx>
                    )}

                    { about.studies.display && (
                        <>
                            <RevealFx translateY="16" delay={0.4}>
                                <Heading
                                    as="h2"
                                    id={about.studies.title}
                                    variant="display-strong-s"
                                    marginBottom="m">
                                    {about.studies.title}
                                </Heading>
                                <Flex
                                    direction="column"
                                    fillWidth gap="l" marginBottom="40">
                                    {about.studies.institutions.map((institution, index) => (
                                        <Flex
                                            key={`${institution.name}-${index}`}
                                            fillWidth gap="4"
                                            direction="column">
                                            <Text
                                                id={institution.name}
                                                variant="heading-strong-l">
                                                {institution.name}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {institution.description}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </RevealFx>
                        </>
                    )}

                    { about.projects.display && (
                        <>
                            <RevealFx translateY="16" delay={0.5}>
                                <Heading
                                    as="h2"
                                    id={about.projects.title}
                                    variant="display-strong-s"
                                    marginBottom="m">
                                    {about.projects.title}
                                </Heading>
                                <Flex
                                    direction="column"
                                    fillWidth gap="l" marginBottom="40">
                                    {about.projects.list.map((project, index) => (
                                        <Flex
                                            key={`${project.title}-${index}`}
                                            fillWidth
                                            direction="column">
                                            <Flex
                                                fillWidth
                                                justifyContent="space-between"
                                                alignItems="flex-end"
                                                marginBottom="4">
                                                <Text
                                                    id={project.title}
                                                    variant="heading-strong-l">
                                                    <Button
                                                        href={project.link}
                                                        variant="tertiary"
                                                        label={project.title}
                                                        target="_blank"
                                                        style={{ 
                                                            fontSize: '1.8em',
                                                            fontWeight: 'inherit',
                                                            color: 'var(--brand-on-background-weak)'
                                                        }}
                                                    />
                                                </Text>
                                            </Flex>
                                            <Flex
                                                as="ul"
                                                direction="column" gap="16">
                                                {project.achievements.map((achievement, index) => (
                                                    <Text
                                                        as="li"
                                                        variant="body-default-m"
                                                        key={`${project.title}-${index}`}>
                                                        {achievement}
                                                    </Text>
                                                ))}
                                            </Flex>
                                            {project.images.length > 0 && (
                                                <Flex
                                                    fillWidth paddingTop="m" paddingLeft="40"
                                                    wrap>
                                                    {project.images.map((image: ProjectImage, index) => (
                                                        <Flex
                                                            key={index}
                                                            border="neutral-medium"
                                                            borderStyle="solid-1"
                                                            radius="m"
                                                            minWidth={image.width} 
                                                            height={image.height}>
                                                            <SmartImage
                                                                enlarge
                                                                radius="m"
                                                                sizes={image.width.toString()}
                                                                alt={image.alt}
                                                                src={image.src}/>
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            )}
                                        </Flex>
                                    ))}
                                </Flex>
                            </RevealFx>
                        </>
                    )}

                    { about.work.display && (
                        <>
                            <RevealFx translateY="16" delay={0.6}>
                                <Heading
                                    as="h2"
                                    id={about.work.title}
                                    variant="display-strong-s"
                                    marginBottom="m">
                                    {about.work.title}
                                </Heading>
                                <Flex
                                    direction="column"
                                    fillWidth gap="l" marginBottom="40">
                                    {about.work.experiences.map((experience: Experience, index) => (
                                        <Flex
                                            key={`${experience.company}-${experience.role}-${index}`}
                                            fillWidth
                                            direction="column">
                                            <Flex
                                                fillWidth
                                                justifyContent="space-between"
                                                alignItems="flex-end"
                                                marginBottom="4">
                                                <Text
                                                    id={experience.company}
                                                    variant="heading-strong-l">
                                                    {experience.company}
                                                </Text>
                                                <Text
                                                    variant="heading-default-xs"
                                                    onBackground="neutral-weak">
                                                    {experience.timeframe}
                                                </Text>
                                            </Flex>
                                            <Text
                                                variant="body-default-s"
                                                onBackground="brand-weak"
                                                marginBottom="m">
                                                {experience.role}
                                            </Text>
                                            <Flex
                                                as="ul"
                                                direction="column" gap="16">
                                                {experience.achievements.map((achievement: string, index: any) => (
                                                    <Text
                                                        as="li"
                                                        variant="body-default-m"
                                                        key={`${experience.company}-${index}`}>
                                                        {achievement}
                                                    </Text>
                                                ))}
                                            </Flex>
                                            {experience.images.length > 0 && (
                                                <Flex
                                                    fillWidth paddingTop="m" paddingLeft="40"
                                                    wrap>
                                                    {experience.images.map((image: ProjectImage, index) => (
                                                        <Flex
                                                            key={index}
                                                            border="neutral-medium"
                                                            borderStyle="solid-1"
                                                            radius="m"
                                                            minWidth={image.width} 
                                                            height={image.height}>
                                                            <SmartImage
                                                                enlarge
                                                                radius="m"
                                                                sizes={image.width.toString()}
                                                                alt={image.alt}
                                                                src={image.src}/>
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            )}
                                        </Flex>
                                    ))}
                                </Flex>
                            </RevealFx>
                        </>
                    )}

                    { about.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                variant="display-strong-s" marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l">
                                {about.technical.skills.map((skill, index) => (
                                    <Flex
                                        key={`${skill}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            variant="heading-strong-l">
                                            {skill.title}
                                        </Text>
                                        <Text
                                            variant="body-default-m"
                                            onBackground="neutral-weak">
                                            {skill.description}
                                        </Text>
                                        {skill.images && skill.images.length > 0 && (
                                            <Flex
                                                fillWidth paddingTop="m" gap="12"
                                                wrap>
                                                {skill.images.map((image: ProjectImage, index) => (
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src}/>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
