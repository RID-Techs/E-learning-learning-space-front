
import './maintenance.css';
export function Maintenance() {
  
    const getUser = localStorage.getItem('User') || "membre";
    console.log(getUser);
    
  
  return (
    <>
      <div className="maintenance-container">
        <div className="maintenance">
          <div className="maintenance-header">
            <div className="">
              <h1>Oups ! Un souci</h1>
            </div>
            <div className="maintenance-emoji">
              <div className="maintenance-eyes-holder">
                <div className="maintenance-eye"></div>
                <div className="maintenance-eye"></div>
              </div>
              <div className="maintenance-mouth-holder">
                <div className="maintenance-mouth"></div>
              </div>
            </div>
          </div>
          <div className="maintenance-body">
            <p>
              Chère / Cher <strong><em>{getUser}</em></strong> ne vous inquiétez pas. C{"'"}est Juste un petit souci technique. Tout devrait rentrer dans l{"'"}ordre très vite.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}