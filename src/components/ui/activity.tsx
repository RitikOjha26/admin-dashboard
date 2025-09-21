import avatar1 from "../../assets/activityAvatar/avatar1.png"
import avatar2 from "../../assets/activityAvatar/avatar2.png"
import avatar3 from "../../assets/activityAvatar/avatar3.png"
import avatar4 from "../../assets/activityAvatar/avatar4.png"
import avatar5 from "../../assets/activityAvatar/avatar5.png"

type ActivityData = {
    title:string,
    time:string,
    src:string
}

const data:ActivityData[] = [
    {
        title:"You have a bug that needs…",
        time:"Just now",
        src: avatar1,
    },
    {
        title:"Released a new version",
        time:"59 minutes ago",
        src: avatar2,
    },
    {
        title:"Submitted a bug",
        time:"12 hours ago",
        src: avatar3,
    },
    {
        title:"Modified A data in Page X",
        time:"Today, 11:59 AM",
        src: avatar4,
    },
    {
        title:"You have a bug that needs…",
        time:"Deleted a page in Project X",
        src: avatar5,
    },
]
function TimelineItem({
  avatarSrc,
  title,
  time,
}: {
  avatarSrc: string
  title: string
  time: string
}) {
  return (
    <li className="relative pl-10 items-center">
      <span className="absolute left-4 top-0 h-full w-px bg-foreground/10" aria-hidden />
      <span className="absolute left-3 top-2 size-3.5 rounded-full bg-background ring-2 ring-foreground/10" />
      <span className="absolute left-1 top-1.5">
        <img
          src={avatarSrc}
          alt=""
          width={28}
          height={28}
          className="rounded-full ring-2 ring-white object-cover"
        />
      </span>

      <div className="min-w-0 items-center">
        <div className="text-[14px] leading-6 text-foreground truncate">{title}</div>
        <div className="text-[12px] leading-5 text-foreground/60">{time}</div>
      </div>
    </li>
  )
}

export default function ActivitiesSection() {
  return (
    <div className="space-y-2">
      <ul className="space-y-5">
        {
            data.map((item)=>{
                return (
                    <TimelineItem avatarSrc={item.src} title={item.title} time={item.time} />
                )
            })
        }
      </ul>
    </div>
  )
}
