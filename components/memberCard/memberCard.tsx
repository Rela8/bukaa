import {MemeberCardContainer} from './MemberCard.style'
import MemberPlaceholder from '../../images/memberPlaceholder.png'
import MarkoBtn from '../MarkoBtn'
import CustomBtn from '../CustomBtn/Button'
import OffCanvas from '../OffCanvas/OffCanvas'
import { useState } from 'react'
import Profile from '../Profile/Profile'
import { useMediaQuery } from 'react-responsive'
import { MemberType } from '../../redux/members/membersApi'
import { FetchName } from '../../utils/extraFunction'

type Prop ={
    member:MemberType
}
const MemberCard = ({member}:Prop)=>{
    const [isOpen, setIsOpen] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 360px)' })
    const Name:string = FetchName(member)
    return (
        <MemeberCardContainer>
           <div className='MemberCardphotoConainer'>
              <img src={member.photo} alt="" />
           </div>

           <h2>{Name}</h2>
           <p className='member_postion'>{member.email}</p>

           <CustomBtn style={{'padding':'.5rem','width':'40%','margin':'10px auto'}}
           onClick={(e)=>{
            setIsOpen(true)
           }}
           >
            View
           </CustomBtn>
           <OffCanvas
            size={isPhone?90:40}
           setIsOpen={setIsOpen}
           isOpen={isOpen}>
                <Profile member={member} />
           </OffCanvas>

        </MemeberCardContainer>
    )
}

export default MemberCard