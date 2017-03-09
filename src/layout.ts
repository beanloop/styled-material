import {ComponentClass, HTMLProps, StatelessComponent} from 'react'
import styled, {StyledFunction, StyledInterface} from 'styled-components'

export const Column: React.ComponentClass<React.HTMLProps<HTMLDivElement> & {
  horizontal?: 'center'|'flex-start'|'flex-end'|'space-between'|'space-around'|'stretch'|'baseline'
  vertical?: 'center'|'flex-start'|'flex-end'|'space-between'|'space-around'
  self?: 'center'|'flex-start'|'flex-end'|'stretch'
  reverse?: boolean
}> = styled.div`
  display: flex;
  flex-direction: ${({reverse}: any) => reverse ? 'column-reverse' : 'column'};
  align-items: ${({horizontal}: any) => horizontal || 'initial'};
  align-self: ${({self}: any) => self || 'initial'};
  justify-content: ${({vertical}: any) => vertical || 'initial'};

  box-sizing: border-box;
  width: 100%;
`

export const Row: React.ComponentClass<React.HTMLProps<HTMLDivElement> & {
  horizontal?: 'center'|'flex-start'|'flex-end'|'space-between'|'space-around'
  vertical?: 'center'|'flex-start'|'flex-end'|'space-between'|'space-around'|'stretch'|'baseline'
  self?: 'center'|'flex-start'| 'flex-end'| 'stretch'
  reverse?: boolean
} > = styled.div`
  display: flex;
  flex-direction: ${({reverse}: any) => reverse ? 'row-reverse' : 'row'};
  align-items: ${({vertical}: any) => vertical || 'initial'};
  align-self: ${({self}: any) => self || 'initial'};
  justify-content: ${({horizontal}: any) => horizontal || 'initial'};

  box-sizing: border-box;
`
