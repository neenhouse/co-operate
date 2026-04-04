import { useState } from 'react';
import MemberList from '../components/members/MemberList';
import MemberInvite from '../components/members/MemberInvite';

export default function MembersPage() {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Members</h1>
        <button className="btn btn-primary btn-sm" onClick={() => setShowInvite(!showInvite)}>
          {showInvite ? 'Close' : 'Invite Member'}
        </button>
      </div>
      {showInvite && (
        <div style={styles.inviteWrap}>
          <MemberInvite />
        </div>
      )}
      <MemberList />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: '1.75rem',
  },
  inviteWrap: {
    marginBottom: 24,
    maxWidth: 480,
  },
};
