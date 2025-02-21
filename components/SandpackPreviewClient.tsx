"use client"
import { ActionContext } from '@/context/ActionContext'
import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react'
import React, { useContext, useEffect, useRef } from 'react'


const SandPackPreviewClient = () => {
               const {sandpack} = useSandpack()
               const actionContext = useContext(ActionContext)

               const {action , setAction} = actionContext; 
               const previewRef = useRef(null)
  
               useEffect(() => {
                 getSandPackClient()

               }, [sandpack && action] )
               
               const getSandPackClient = async()=>{
                              const client = previewRef.current.getClient()
                              if(client){
                                             const result = await client.getCodeSandboxURL()
                                             console.log(result)
                                             if(action.Action =="deploy"){
                                              navigator.clipboard.writeText('https://'+result.sandboxId+'.csb.app/').then(()=>{
                                                toast({
                                                  title:"Link Copied to the clipboard" , 
                                                  Description : "link copied to the clipboard` "
                                                })
                                              })

                                             }else if(action.Action =="export"){
                                                            window.open(result.editorUrl)
                                             }
                              }

               }
               
  return (
               <SandpackPreview ref={previewRef}   showNavigator={true} style={{height:"78vh"}} />
)
}

export default SandPackPreviewClient