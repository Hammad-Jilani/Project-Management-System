import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../Project/ProjectCard'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { fetchProjects, searchProjects } from '@/Redux/Project/Action'

export const tags = [
  "all","react","next js","spring boot","mysql","mongo db","angular","python","flask","django"
]
 
function ProjectList() {
  const {auth,project} = useSelector(store=>store)
  const [keyword,setKeyword] = useState("")
  const dispatch = useDispatch()

  function handleFilterCategory(value){
  
    if(value=='all'){
      dispatch(fetchProjects({}))
    }
    dispatch(fetchProjects({category:value}))
    // console.log("value",value);
  }


  function handleFilterTag(value){
    if(value=='all'){
      dispatch(fetchProjects({}))
    }
    else
    dispatch(fetchProjects({tag:value}))
    // console.log("value",value);
  }

  function handleSearchChange(e){
    setKeyword(e.target.value)
    dispatch(searchProjects(e.target.value))
  }

  // useEffect(()=>{
  //     dispatch(fetchProjects({}))
  //   },[])
    console.log('project store',project);

  return (
    <div>
      <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
        <section className='filterSection'>
          <Card className="p-5 sticky top-10">
            <div className='flex justify-between lg:w-[20rem]'>
              <p className='text-xl tracking-wider'>filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon/>
              </Button> 
            </div>
            <CardContent className="mt-5 overflow-auto">
              <ScrollArea className='space-y-7 h-[70vh]'>
                <div>
                  <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
 
                  <div className='pt-5'>
                    <RadioGroup className="xl:space-y-3 xl:pt-3" defaultValue="all" onValueChange ={(value)=>handleFilterCategory(value)}>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value="all" id="r1"/>
                        <Label htmlFor="r1">all</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value="fullstack" id="r2"/>
                        <Label htmlFor="r2">fullstack</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value="frontend" id="r3"/>
                        <Label htmlFor="r3">frontend</Label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem value="backend" id="r4"/>
                        <Label htmlFor="r4">backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className='pt-9'>
                  <h1 className='pb-3 text-gray-400 border-b'>Tag</h1>

                  <div className='pt-5'>
                    <RadioGroup className="xl:space-y-3 xl:pt-3" defaultValue="all" onValueChange ={(value)=>handleFilterTag(value)}>
                      {tags.map((item)=>
                        <div key={item} className='flex items-center gap-2'>
                          <RadioGroupItem value={item} id={`r1-${item}`}/>
                          <Label htmlFor={`r1-${item}`}>{item}</Label>
                        </div>)                        
                        }
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <section className='projectListSection w-full lg:w-[48rem]'>
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className='relative w-full p-0'>
              <Input className="40% px-9" placeholder="Search Project" onChange={(event)=>handleSearchChange(event)}></Input>
              <MagnifyingGlassIcon className='absolute top-3 left-4'></MagnifyingGlassIcon>
            </div>

          </div>
          <div className='space-y-5 min-h-[74vh]'>
            {
              keyword ?project.searchProjects?.map((item,index)=><ProjectCard item={item} key={item.id*index}/>):
              project.projects.map((item,index)=><ProjectCard key={item.id} item={item}/>)
            }
          </div>
        </section>

      </div>
    </div>
  )
}

export default ProjectList