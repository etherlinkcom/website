import React from 'react'
import Container from '../components/container'

export const FooterBanner = () => {
  return (
    <Container
      className='flex flex-col gap-4 bg-lightBlack px-5 md:px-8 
      py-12 md:py-8 mt-10 rounded-lg ​'
    >
      <h1 className='text-gray-300 text-lg font-semibold'>
        The Etherlink Ecosystem
      </h1>

      <Paragraph>
        This page features some of the entities and applications in the
        Etherlink ecosystem – this is not a comprehensive list, and due to the
        fast growing nature of the ecosystem, it may be outdated; however, it
        provides a starting point to exploring the Etherlink ecosystem. Whether
        you are a developer, artist, creative, or institution, discover
        empowerment through web3 with the accessible Etherlink blockchain today.
      </Paragraph>
      <Paragraph>
        Note: Identifying, linking to or otherwise listing entities and
        applications on this site does not constitute an endorsement in any way
        of the entities or applications or any use or function thereof. Nothing
        contained on this site should be construed or interpreted as an official
        statement of or affiliated with etherlink.com or made by or on behalf of
        etherlink.com. None of the projects, applications or entities are
        affiliates of etherlink.com. Any project, entity or application
        identified on this site has been created by an independent team building
        independently on the Etherlink protocol.
      </Paragraph>
      <Paragraph>
        Any user of this site and anyone that accesses the content made
        available on this site should conduct independent due diligence before
        engaging with or using any Dapps and should not rely on any information
        provided on this website. Information included on this site was provided
        by the entities, projects or applications without independent
        verification, and etherlink.com takes no responsibility for accuracy of
        such information.
      </Paragraph>
      <Paragraph>
        Etherlink.com is providing this site, and the information contained
        herein, as a resource for all users of the Etherlink blockchain and
        those seeking to further engage with Etherlink through applications and
        projects, or otherwise be connected with other developers and projects
        within the Etherlink ecosystem. Etherlink.com may stop supporting this
        site at any time or review and update its content as necessary.
      </Paragraph>
    </Container>
  )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-gray-400 text-sm'>{children}</p>
}
