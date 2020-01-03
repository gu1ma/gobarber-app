import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignOut from '~/pages/SignOut';

const Routes = createAppContainer(createSwitchNavigator({SignIn}));

export default Routes;
