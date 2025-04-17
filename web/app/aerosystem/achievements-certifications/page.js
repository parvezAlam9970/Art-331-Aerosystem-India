import Achievements from '@/components/aerosystem/achievements/Achievements'
import Certifications from '@/components/aerosystem/achievements/Certifications'
import Container from '@/components/custom/Container'
import BreadCrumb from '@/components/ReUseComp/BreadCrumb'
import React from 'react'

const AchievementsPage = () => {
  return (
    <div>
    <BreadCrumb title="Achievements And Certifications" subtitle="Aerosystems" />
    <Container>
        <Achievements/>
        <Certifications/>
    </Container>
    </div>
  )
}

export default AchievementsPage