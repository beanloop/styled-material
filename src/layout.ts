export const Column: StatelessComponent<{
  style?: any
  horizontal?: 'center'|'flex-start'|'flex-end'
  vertical?: 'center'|'flex-start'|'flex-end'
  self?: 'center'|'flex-start'|'flex-end'|'stretch'
  reverse?: boolean
}> = styled.div`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
  align-items: ${({horizontal}) => horizontal || 'initial'};
  align-self: ${({self}) => self || 'initial'};
  justify-content: ${({vertical}) => vertical || 'initial'};

  box-sizing: border-box;
  width: 100%;
`

export const Row: StatelessComponent<{
  style?: any
  horizontal?: 'center'|'flex-start'|'flex-end'
  vertical?: 'center'|'flex-start'|'flex-end'|'space-around'
  self?: 'center'|'flex-start'|'flex-end'|'stretch'
  reverse?: boolean
}> = styled.div`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
  align-items: ${({vertical}) => vertical || 'initial'};
  align-self: ${({self}) => self || 'initial'};
  justify-content: ${({horizontal}) => horizontal || 'initial'};

  box-sizing: border-box;
`
