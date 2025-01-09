import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"



const MainLayout = () => {
    const isMoblie = false;
  return (
    <div className='h-screen bg-black text-white flex flex-col'>    
    <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">
        {/* left */}
        <ResizablePanel defaultSize={20} minSize = {isMoblie?0:10} maxSize={30}>
            left Siderbar
        </ResizablePanel>


        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>


        {/* Main */}
        <ResizablePanel defaultSize={isMoblie?80:60}>
            <Outlet/>
        </ResizablePanel>


        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>


        {/* right */}
        <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
            ferind activity
        </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout
