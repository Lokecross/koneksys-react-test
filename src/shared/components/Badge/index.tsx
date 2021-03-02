import { useMemo } from 'react';
import { CSSProperties } from 'styled-components';

import { FaUpload, FaFootballBall, FaStar, FaCheck } from 'react-icons/fa';

import BadgeStructure from './components/BadgeStructure';

type BadgeProps = {
  children: JSX.Element | string;
  icon: 'upload' | 'football' | 'star' | 'check';
  position?: 'left' | 'right' | 'center';
  active?: boolean;
  error?: boolean;
  style?: CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  position: 'center',
  active: false,
  error: false,
  style: {},
};

const Badge = ({
  children,
  icon,
  position,
  active,
  error,
  style,
}: BadgeProps) => {
  const colors = useMemo(() => {
    if (error && active) {
      return {
        textColor: '#fff',
        borderColor: '#FF0000',
        backgroundColor: '#FF0000',
      };
    }
    if (active) {
      return {
        textColor: '#fff',
        borderColor: '#2F54D0',
        backgroundColor: '#2F54D0',
      };
    }

    return null;
  }, [active, error]);

  const iconChanged = useMemo(() => {
    if (icon === 'upload') {
      return <FaUpload size={13} color={colors?.textColor} />;
    }
    if (icon === 'football') {
      return <FaFootballBall size={13} color={colors?.textColor} />;
    }
    if (icon === 'star') {
      return <FaStar size={13} color={colors?.textColor} />;
    }
    if (icon === 'check') {
      return <FaCheck size={13} color={colors?.textColor} />;
    }

    return <FaUpload size={13} color={colors?.textColor} />;
  }, [colors, icon]);

  return (
    <BadgeStructure
      icon={iconChanged}
      position={position}
      style={style}
      textColor={colors?.textColor}
      borderColor={colors?.borderColor}
      backgroundColor={colors?.backgroundColor}
    >
      {children}
    </BadgeStructure>
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
