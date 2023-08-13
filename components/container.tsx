type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="flex flex-col gap-6">
    {children}
    </div>
}  

export default Container
