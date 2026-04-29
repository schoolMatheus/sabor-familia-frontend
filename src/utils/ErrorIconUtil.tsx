import LockIcon     from '../../src/assets/icon/error/LockIcon';
import WarningIcon  from '../../src/assets/icon/error/WarningIcon';
import ServerIcon   from '../../src/assets/icon/error/ServerIcon';
import NotFoundIcon from '../../src/assets/icon/error/NotFoundIcon';
import GenericIcon  from '../../src/assets/icon/error/GenericIcon';
import type { ErrorIconType } from '../../src/dto/enums/ErrorIconType';

interface ErrorIconProps {
  type: ErrorIconType;
}

const iconMap: Record<ErrorIconType, React.FC> = {
  'lock':      LockIcon,
  'warning':   WarningIcon,
  'server':    ServerIcon,
  'not-found': NotFoundIcon,
  'generic':   GenericIcon,
};

const ErrorIcon = ({ type }: ErrorIconProps) => {
  const Icon = iconMap[type];
  return <Icon />;
};

export default ErrorIcon;
