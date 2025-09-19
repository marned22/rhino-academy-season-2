import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';
import { FilterBarProps, FilterType } from '../../types/types';


const FilterBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f2eef6;
  padding: 20px 32px;
  border-radius: 16px;
  border: 2px solid #cbb8e6; 
  box-shadow:
    0 8px 32px 0 rgba(126, 93, 161, 0.25),
    0 2px 8px 0 rgba(0,0,0,0.10);
  transition: box-shadow 0.2s, border 0.2s;
  backdrop-filter: blur(2px);
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  .MuiToggleButton-root {
    border-color: #ddd;
    text-transform: none;
    padding: 8px 16px;
    background: #fff;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 0 2px 8px 0 rgba(126, 93, 161, 0.10), 0 1px 4px 0 rgba(0,0,0,0.06);
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;

    &.Mui-selected {
      background-color: #7e5da1;
      color: white;

      &:hover {
        background-color: #6a4d8a;
      }
    }
  }
`;

const FilterInfo = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
`;

export const FilterBar = ({ filter, setFilter}: FilterBarProps) => {

  const handleFilterChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: FilterType | null
  ) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const getFilterDescription = () => {
    if(filter === "all") return "Showing all posts";
    if(filter === "friends") return "Showing posts from friends ";
    if(filter === "mine") return "Showing your posts";
    return "";
  };

  return (
    <FilterBarWrapper>
      <StyledToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="post filter"
      >
        <ToggleButton value="all" aria-label="all posts">
          <PublicIcon sx={{ mr: 1 }} />
          All Posts
        </ToggleButton>
        <ToggleButton value="friends" aria-label="friends posts">
          <PeopleIcon sx={{ mr: 1 }} />
          Friends Only
        </ToggleButton>
        <ToggleButton value="mine" aria-label="my posts">
          <PersonIcon sx={{ mr: 1 }} />
          My Posts
        </ToggleButton>
      </StyledToggleButtonGroup>
      <FilterInfo>{getFilterDescription()}</FilterInfo>
    </FilterBarWrapper>
  );
};