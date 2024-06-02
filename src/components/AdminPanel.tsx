import CreateTeam from "./adminPanelComponents/CreateTeam";
import CreatePlayer from "./adminPanelComponents/CreatePlayer";
import LoadTeam from "./adminPanelComponents/LoadTeam";
import LoadAllTeams from "./adminPanelComponents/LoadAllTeams";

export default function AdminPanel() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="md:w-2/3 flex flex-col">
          <div className="w-full flex justify-center p-4 pt-28 md:pt-40 flex-col md:flex-row gap-4">
            <CreateTeam />
            <CreatePlayer />
          </div>
          <div className="w-full flex justify-center px-4 flex-col md:flex-row gap-4">
            <LoadTeam />
          </div>
          <div className="w-full flex justify-center px-4 pt-4 flex-col md:flex-row gap-4">
            <LoadAllTeams />
          </div>
        </div>
      </div>
      
    </>
  )
}