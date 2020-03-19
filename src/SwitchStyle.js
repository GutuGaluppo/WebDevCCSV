import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

class SwitchStyle extends Component {
    render(){
        const { darkMode, toggledarkMode } = this.props;
          return (
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={toggledarkMode}
                    name="checked"
                    color="secondary"
                  />
                }
                label={<Typography color={darkMode ? 'secondary': ''}>{darkMode?"Dark mode":"Light mode"}</Typography>}
              />
            </FormGroup>
          );
    }
}

export default SwitchStyle;