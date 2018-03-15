import React from 'react'
import styled from 'styled-components'

import {Spin} from 'antd'

export const CenterLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    width: 800px;
  }
`

export const AdjustCenterLayout = styled.div`
  margin-bottom: 200px;
`

export const Loading = () => {
  return (
    <CenterLayout>
      <AdjustCenterLayout>
        <Spin size="large" />
      </AdjustCenterLayout>
    </CenterLayout>
  )
}
