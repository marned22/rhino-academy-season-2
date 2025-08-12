import React from 'react';
import { WithFilterableProps } from '../../types/types';
import styled from 'styled-components';
import { useAuth } from '../context/auth/useAuth';
import { useFilterPosts } from '../../hooks/useFilter';
import { FilterBar } from '../components/Navigation/PostsNav';


const FilterableContainer = styled.div`
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const withFilterable = <P extends WithFilterableProps>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const { posts, ...rest } = props;
    const { currentUser } = useAuth();
    const { filteredPosts, filter, setFilter } = useFilterPosts(posts, currentUser ?? undefined);

    return (
      <FilterableContainer>
        <FilterBar filter={filter} setFilter={setFilter} />
        <Component
          {...(rest as P)}
          posts={filteredPosts}
          filter={filter}
          setFilter={setFilter}
        />
      </FilterableContainer>
    );
  };
};