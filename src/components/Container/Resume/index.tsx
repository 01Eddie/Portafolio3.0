import { ReactNode, SyntheticEvent, useEffect, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import Education from './Education'
import WorkHistory from './WorkHistory'
import ProgrammingSkills from './ProgrammingSkills'
import Projects from './Projects'
import Interest from './Interest'
import { useSnapshot } from 'valtio'
import { headerStore } from '../../../store/portfolio'

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      aria-labelledby={`vertical-tab-${index}`}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      role='tabpanel'
      style={{ maxWidth: '50%', overflow: 'auto' }}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number) => ({
  'aria-controls': `vertical-tabpanel-${index}`,
  id             : `vertical-tab-${index}`
})

const Resume = () => {
  const { resume } = useSnapshot(headerStore)
  const [ value, setValue ] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{ bgcolor: 'background.paper', display: 'flex', flexGrow: 1, height: 224, justifyContent: 'center' }}>
      <Tabs
        aria-label='Vertical tabs example'
        onChange={handleChange}
        orientation='vertical'
        sx={{ borderColor: 'divider', borderRight: 1 }}
        value={value}
        variant='scrollable'>
        {/* Lo cambio a un nivel mas el map */}
        { resume?.details?.map(det => (
          <Tab key={det.idD} label={det.name} {...a11yProps(det.idD)} />)
        )}
      </Tabs>
      <TabPanel index={0} value={value}>
        <Education />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <WorkHistory />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <ProgrammingSkills />
      </TabPanel>
      <TabPanel index={3} value={value}>
        <Projects />
      </TabPanel>
      <TabPanel index={4} value={value}>
        <Interest />
      </TabPanel>
    </Box>
  )
}

export default Resume
