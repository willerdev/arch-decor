import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  border-bottom: 3px solid #f0b90b;
  padding-bottom: 10px;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin: 1.5rem 0;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin: 1rem 0;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #fff;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  strong {
    color: #f0b90b;
    font-size: 1.2rem;
  }

  em {
    color: #666;
    font-style: normal;
    font-weight: 500;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

// Component type definition
const About: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>About Us</Title>
        
        <Section>
          <SectionTitle>Why KMT?</SectionTitle>
          <Text>
            KMT Shop is more than an e-commerce platform; it is a celebration of African heritage
            and excellence. The name <strong>"KMT"</strong>, derived from <strong>"Kamite"</strong>, honors the identity and
            dignity of African people before the era of colonialism...
          </Text>
        </Section>

        <Section>
          <SectionTitle>About</SectionTitle>
          <SubTitle>African History</SubTitle>
          <Text>
            Africa s history is filled with courageous individuals who shaped the continents legacy
            through their sacrifices, leadership, and vision. Below, we honor some of the most notable figures:
          </Text>
          
          <List>
            <ListItem>
              <strong>Nelson Mandela (1918–2013)</strong><br />
              <em>Country:</em> South Africa<br />
              <em>Legacy:</em> Leader of the anti-apartheid movement...
            </ListItem>
            <ListItem>
              <strong>Kwame Nkrumah (1909–1972)</strong><br />
              <em>Country:</em> Ghana<br />
              <em>Legacy:</em> Ghana s first president, a champion of pan-Africanism, and key figure in 
              establishing the African Union.
            </ListItem>
            <ListItem>
              <strong>Queen Nzinga (1583–1663)</strong><br />
              <em>Country:</em> Ndongo and Matamba (modern-day Angola)<br />
              <em>Legacy:</em> Warrior queen who resisted Portuguese colonization and fought for freedom.
            </ListItem>
            <ListItem>
              <strong>Patrice Lumumba (1925–1961)</strong><br />
              <em>Country:</em> Democratic Republic of Congo<br />
              <em>Legacy:</em> Congo s first prime minister and a martyr for African unity.
            </ListItem>
            <ListItem>
              <strong>Samori Touré (1830–1900)</strong><br />
              <em>Country:</em> West Africa (Guinea, Mali, Côte d Ivoire)<br />
              <em>Legacy:</em> Military leader and founder of the Wassoulou Empire who resisted French colonization.
            </ListItem>
            <ListItem>
              <strong>Haile Selassie I (1892–1975)</strong><br />
              <em>Country:</em> Ethiopia<br />
              <em>Legacy:</em> Ethiopian emperor, anti-colonial leader, and founding figure of the African Union.
            </ListItem>
            <ListItem>
              <strong>Thomas Sankara (1949–1987)</strong><br />
              <em>Country:</em> Burkina Faso<br />
              <em>Legacy:</em> Revolutionary leader who championed self-reliance, women s rights, and anti-corruption.
            </ListItem>
            <ListItem>
              <strong>Wangari Maathai (1940–2011)</strong><br />
              <em>Country:</em> Kenya<br />
              <em>Legacy:</em> Nobel laureate and environmental activist who founded the Green Belt Movement.
            </ListItem>
            <ListItem>
              <strong>Desmond Tutu (1931–2021)</strong><br />
              <em>Country:</em> South Africa<br />
              <em>Legacy:</em> Anti-apartheid cleric and advocate for restorative justice and healing.
            </ListItem>
            <ListItem>
              <strong>Julius Nyerere (1922–1999)</strong><br />
              <em>Country:</em> Tanzania<br />
              <em>Legacy:</em> Tanzania s first president and a proponent of African socialism and unity.
            </ListItem>
            <ListItem>
              <strong>Shaka Zulu (1787–1828)</strong><br />
              <em>Country:</em> Zulu Kingdom (modern-day South Africa)<br />
              <em>Legacy:</em> Military innovator who transformed the Zulu Kingdom into a formidable power.
            </ListItem>
            <ListItem>
              <strong>Steve Biko (1946–1977)</strong><br />
              <em>Country:</em> South Africa<br />
              <em>Legacy:</em> Leader of the Black Consciousness Movement and a symbol of resistance during apartheid.
            </ListItem>
            <ListItem>
              <strong>Yaa Asantewaa (1840–1921)</strong><br />
              <em>Country:</em> Ashanti Empire (modern-day Ghana)<br />
              <em>Legacy:</em> Queen Mother who led the War of the Golden Stool against British forces.
            </ListItem>
            <ListItem>
              <strong>Chinua Achebe (1930–2013)</strong><br />
              <em>Country:</em> Nigeria<br />
              <em>Legacy:</em> Author of *Things Fall Apart*, a seminal work on African society and colonialism.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SubTitle>African Updates</SubTitle>
          <Text>
            This section will keep you informed about Africa's current achievements...
          </Text>
        </Section>
      </Content>
    </Container>
  );
};

export default About;
