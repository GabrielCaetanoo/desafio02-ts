import { Card, CardBody, Heading, Stack, Text, Button, Link } from '@chakra-ui/react';

// Interface para definir as propriedades do nosso componente
interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl: string;
}

export const ProjectCard = ({ title, description, repoUrl }: ProjectCardProps) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>
            {description}
          </Text>
          <Link href={repoUrl} isExternal>
            <Button variant='solid' colorScheme='teal'>
              Ver Repositório
            </Button>
          </Link>
        </CardBody>
      </Stack>
    </Card>
  );
};