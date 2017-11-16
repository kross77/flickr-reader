import React from 'react';

import { Text, View } from 'react-native';
import { withState } from 'recompose';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import LoginScreen from '../../app/pages/Login';
import DashboardScreen from '../../app/pages/Dashboard';

import styled from 'styled-components/native';

import Logo from '../../app/pages/components/Logo';
import Dashboard from "../../app/hair/pages/Dashboard/index";

const Page = styled.View`
	flex: 1;
`;

const PageContainer = ({children}) =>
	<Page>
		<Logo/>
		{children}
	</Page>;


storiesOf('AspireMe', module)

    .add('login page', () =>
		<PageContainer>
			<LoginScreen/>
		</PageContainer>

    )
    .add('dashboard page', () =>
		<PageContainer>
			<DashboardScreen/>
		</PageContainer>
    );
