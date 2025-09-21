import { cn } from "@/lib/utils"

type Props = {
  name: string
  avatarSrc: string
  className?: string
}

export default function ProfileCard({ name, avatarSrc, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md  bg-background px-1 py-2",
        
        className
      )}
    >
      <img
        src={avatarSrc}
        alt=""
        className="size-7 rounded-full object-cover"
      />
      <span className="truncate text-[15px] leading-6 text-foreground">
        {name}
      </span>
    </div>
  )
}
