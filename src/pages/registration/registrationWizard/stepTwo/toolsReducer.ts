import { Tool } from '@pages/registration/contexts/registrationWizardContext';

type ToolActions =
  | {
      type: 'toggleTool';
      tool: Tool;
    }
  | {
      type: 'setSearchTerm';
      term: string;
    };

export const toggleTool = (tool: Tool) => ({ type: 'toggleTool', tool });
export const setSearchTerm = (term: 'string') => ({ type: 'setSearchTerm', term });

type ToolsState = {
  searchTerm: string;
  selected: Tool[];
  all: Tool[];
  allFiltered: Tool[];
};

const allTools = [Tool.GMAIL, Tool.HUBSPOT, Tool.MARKETO, Tool.OUTREACH, Tool.SALESFORCE];

export const toolsInitialState: ToolsState = {
  searchTerm: '',
  selected: [],
  all: allTools,
  allFiltered: allTools,
};

const toolsFilterFunc = (searchTerm: string) => {
  if (!searchTerm) {
    return (tool: Tool) => true;
  }
  const searchTermNormalized = searchTerm.toLowerCase();
  return (tool: Tool) => tool.toLowerCase().includes(searchTermNormalized);
};

export const toolsReducer = (state = toolsInitialState, action: ToolActions) => {
  switch (action.type) {
    case 'toggleTool': {
      const { tool } = action;
      const selectedIndex = state.selected.findIndex((item) => item === tool);

      if (selectedIndex >= 0) {
        const newSelected = [...state.selected];
        newSelected.splice(selectedIndex, 1);
        const newAll = [...state.all, tool];

        return {
          searchTerm: state.searchTerm,
          selected: newSelected,
          all: newAll,
          allFiltered: newAll.filter(toolsFilterFunc(state.searchTerm)),
        };
      }

      const allIndex = state.all.findIndex((item) => item === tool);
      const newAll = [...state.all];
      newAll.splice(allIndex, 1);

      return {
        searchTerm: state.searchTerm,
        selected: [...state.selected, tool],
        all: newAll,
        allFiltered: newAll.filter(toolsFilterFunc(state.searchTerm)),
      };
    }
    case 'setSearchTerm': {
      const { term } = action;
      return { ...state, searchTerm: term, allFiltered: state.all.filter(toolsFilterFunc(term)) };
    }
  }
};
