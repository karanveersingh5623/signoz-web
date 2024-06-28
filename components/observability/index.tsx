'use client'
import React from 'react'
import Heading from '../../components/ui/Heading'
import Button from '../../components/ui/Button'
import {ArrowRightSolid }from "@/components/homepage-icons/icons"


const Observability = () => {
  return (
    <section>
    <div className='flex flex-col w-auto h-auto border border-signoz_slate-400 border-dashed py-10 pl-10'>
      <div className="flex flex-row">
        <div className='flex flex-col justify-between'>
        <div>
        <p className='text-2xl font-semibold text-signoz_vanilla-100 block mb-2'> Enterprise-grade Observability</p>
        <p className='text-signoz_vanilla-400 text-base font-normal leading-9'>Get access to observability at any scale with advanced security and compliance.</p>
        </div>
        <div>
        <ul className='ul-no-padding flex flex-col gap-3'>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>SSO and SAML support</span>
          </li>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>Query API Keys</span>
          </li>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>Advanced Security</span>
          </li>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>AWS Private Link</span>
          </li>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>VPC Peering</span>
          </li>
          <li className="flex flex-row items-center gap-3">
          <ArrowRightSolid/><span className='text-signoz_vanilla-400 text-base font-normal leading-9'>Custom Integrations</span>
          </li>
        </ul>
        </div>
        </div>
        <div className="h-[404px] w-[272px] card-background"></div>
      </div>
    </div>
  </section>
    
  )
}

export default Observability
