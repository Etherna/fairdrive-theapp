import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './alertBanner';

const useStyles = makeStyles(() =>
	createStyles({
		AlertBanner: {
			width: '140rem',
			height: '8rem',
			top: '10rem',
			left: 'calc(50% - 70rem)',
			position: 'absolute',
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			borderRadius: '1rem',
			border: (style: Props & Theme) =>`1px solid ${style.backgroundLight3}`,
			color: (style: Props & Theme) => style.textColorPrimary,
		},
		warningIcon: {
			float: 'left',
			margin: 'auto',
		},
		betaWarningText: {
			margin: 'auto',
			font: (style: Props & Theme) => style.typography.caption2,
		},
		agree: {
			margin: 'auto',
			border:  (style: Props & Theme) =>`1px solid ${style.backgroundLight3}`,
			borderRadius: (style: Props & Theme) => '0.5rem',
			cursor: 'pointer',
			padding: '1rem 2rem',
			color: (style: Props & Theme) => style.textColorPrimary,
			font: (style: Props & Theme) => style.typography.caption1,
			'&:hover': {
				border: (style: Props & Theme) => `1px solid ${style.backgroundWhite}`,
			},
			'&:active': {
				border:  (style: Props & Theme) => `1px solid ${style.backgroundWhite}`,
			},
		},
		warning: {
			padding: '2rem',
			width: '150rem',
			border: (style: Props & Theme) => `1px solid ${style.textColorPrimary}`,
			textAlign: 'center',
			font: (style: Props & Theme) => style.typography.h6,
			borderRadius: '1rem',
			flexDirection: 'row',
			marginBottom: '12rem',
		},
	})
);

export default useStyles;
