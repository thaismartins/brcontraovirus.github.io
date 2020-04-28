import React, { useState } from 'react'

import Center from '@components/Center'
import Project from '@components/Project'
import PageTitle from '@components/PageTitle'

import categories from './categories'
import projects from './projects'

import {
  Container,
  Title,
  Text,
  Projects,
  Categories,
  Category,
} from './styles'

const Projetcs = () => {
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <Container>
      <Center>
        <Title>Projetos</Title>
        <Text>
          Soluções opensource para auxiliar o Sistema de Saúde Brasileiro
          durante a crise do COVID-19
        </Text>

        <Categories>
          <Category
            active={activeCategory === ''}
            onClick={() => setActiveCategory('')}
          >
            Todos
          </Category>
          {categories.map((category, index) => (
            <Category
              key={index}
              active={activeCategory === category.type}
              onClick={() => setActiveCategory(category.type)}
            >
              {category.title}
            </Category>
          ))}
        </Categories>

        <Projects>
          {projects.map((project, index) => (
            <Project
              key={index}
              show={
                activeCategory === project.categoryType || activeCategory === ''
              }
              image={project.images[0]}
              title={project.title}
              category={project.category}
            />
          ))}
        </Projects>
        <PageTitle color='orange' border>
          Compartilhe seu Projeto
        </PageTitle>
      </Center>
    </Container>
  )
}

export default Projetcs
