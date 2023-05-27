import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import {
    
    StarIcon,
    HeartIcon,
    
  } from "@heroicons/react/24/solid";
const Pollcard = () => {
    
    return  (
        
        <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-10 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Travelling
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              
            </Typography>
          </div>
          <Typography color="gray">
           Travelling calms your mind and refreshes your soul.
           Are you ready to dive into a fun poll on travelling?
          </Typography>
         
        
      </CardBody>
      <CardFooter className="bg-sky-600">
        <Button size="lg" fullWidth={false} class="bg-indigo-500 ..." >
          PARTICIPATE
        </Button>
      </CardFooter>
    </Card>
    );
  
   
}

export default Pollcard

 