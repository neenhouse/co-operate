import { useState } from 'react';

export default function MemberInvite() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
      setRole('member');
    }, 2000);
  };

  return (
    <div className="card">
      <h3 style={styles.title}>Invite New Member</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="member@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%' }}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%' }}>
            <option value="member">Member</option>
            <option value="board">Board Member</option>
            <option value="officer">Officer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {sent ? 'Invitation Sent!' : 'Send Invitation'}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  formGroup: {},
  label: {
    display: 'block',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 6,
  },
};
