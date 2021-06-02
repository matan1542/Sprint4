import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

export function SelectResponsiveView({handleChange}) {
    if (window.innerWidth < 768) return <span />
    return (
        <div className="choose-responsive-view flex">
            <div className="respView">
                <input type="radio" id="large" name="respView" value="large-view" onChange={handleChange}/>
                <label htmlFor="large" title="Large"><DesktopWindowsIcon /></label>
                <input type="radio" id="medium" name="respView" value="medium-view" onChange={handleChange}/>
                <label htmlFor="medium" title="Medium"><TabletMacIcon /></label>
                <input type="radio" id="small" name="respView" value="small-view" onChange={handleChange}/>
                <label htmlFor="small" title="Small"><SmartphoneIcon /></label>
            </div>
        </div>
    )
}