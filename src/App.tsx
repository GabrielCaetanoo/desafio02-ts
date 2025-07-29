import { Box, Heading, SimpleGrid, VStack, Spinner, Text } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile';
import { ActionButtons } from './components/ActionButtons';
import { ProjectCard } from './components/ProjectCard';
import { useState, useEffect } from 'react'; // Importe os hooks

// 1. Interface de tipos para os dados do repositório
interface IRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function App() {
  // 2. Estados para dados, carregamento e erro
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 3. Efeito para buscar dados da API
  useEffect(() => {
    const getRepos = async () => {
      try {
        // ⚠️ LEMBRE-SE DE TROCAR PELO SEU USUÁRIO!
        const response = await fetch('https://api.github.com/users/GabrielCaetanoo/repos');
        if (!response.ok) {
          throw new Error('Falha ao buscar dados');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error('Erro ao buscar repositórios:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  return (
    <Box minHeight="100vh" backgroundColor="#f0f2f5">
      <Header />
      <VStack as="main" p="4" spacing={8}>
        <Profile />
        <ActionButtons />

        <Box w="100%" maxW="960px">
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Meus Projetos no GitHub
          </Heading>

          {/* 4. Lógica de Renderização Condicional */}
          {loading && (
            <VStack>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='teal.500'
                size='xl'
              />
              <Text>Carregando repositórios...</Text>
            </VStack>
          )}

          {error && (
            <Text color="red.500">
              Ocorreu um erro ao carregar os projetos. Tente novamente mais tarde.
            </Text>
          )}

          {!loading && !error && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {repos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  title={repo.name}
                  description={repo.description || 'Este repositório não tem uma descrição.'}
                  repoUrl={repo.html_url}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Box>
  );
}

export default App;