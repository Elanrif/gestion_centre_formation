import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function ProgrammeDetaille({formation}) {


  return (
    <div>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Plus des détails</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className='p-3 bg-orange-50' dangerouslySetInnerHTML={{ __html: formation.programme }} />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}




