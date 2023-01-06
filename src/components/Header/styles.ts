import styled from 'styled-components'
import { Layout, Dimensions } from '@styles/index'

const Root = styled(Layout.Container)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: space-between;
  padding: ${Dimensions.px.size20};
  width: ${Dimensions.per.sizeFull};
`

const LogoContainer = styled(Layout.CenteredHorizontal)`
  width: ${Dimensions.per.sizeFull};
`

export { Root, LogoContainer }