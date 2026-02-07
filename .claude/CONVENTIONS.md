# Coding Conventions

## React / TypeScript

### Folder Structure

```
src/
  features/           # Domain feature modules
    landing/
      components/     # Feature-specific components
      hooks/          # Feature-specific hooks
      api/            # API client functions
      types.ts        # Feature types
      index.ts        # Public exports
  components/         # Shared/reusable components
    ui/               # Design system primitives (Button, Input, Card)
    layout/           # Layout components (Navbar, Footer, Container)
  hooks/              # Shared hooks
  lib/                # Utilities, constants, data
  pages/              # Route-level pages
```

### Naming

| Thing           | Convention            | Example                  |
|-----------------|-----------------------|--------------------------|
| Component       | PascalCase            | `UserCard.tsx`           |
| Hook            | camelCase, `use` prefix | `useUsers.ts`          |
| Type/Interface  | PascalCase            | `UserResponse`           |
| API function    | camelCase, verb first | `fetchUsers`, `createUser` |
| Test file       | `{Component}.test.tsx` | `UserCard.test.tsx`     |

### Do / Don't

```tsx
// DO: Functional components with typed props
interface UserCardProps {
  user: UserResponse;
  onSelect: (id: string) => void;
}

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div onClick={() => onSelect(user.id)}>
      <h3>{user.name}</h3>
    </div>
  );
}

// DON'T: Untyped props or class components
export function UserCard(props: any) { // NEVER
```

```tsx
// DO: Handle loading, error, and empty states
function UserList() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data?.length) return <EmptyState message="No users found" />;

  return <ul>{data.map(u => <UserCard key={u.id} user={u} />)}</ul>;
}

// DON'T: Only handle the happy path
function UserList() {
  const { data } = useUsers();
  return <ul>{data.map(u => <UserCard key={u.id} user={u} />)}</ul>; // crashes on null
}
```

```tsx
// DO: Extract reusable components
<Button variant="primary" size="sm" onClick={handleSubmit}>Save</Button>

// DON'T: Inline styles or repeated markup
<button style={{backgroundColor: 'blue', padding: '8px'}} onClick={handleSubmit}>Save</button>
```

```tsx
// DO: Typed API client
export async function submitLead(data: LeadRequest): Promise<void> {
  const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit form.');
}

// DON'T: Untyped fetch calls scattered in components
const res = await fetch('/api/users'); // NEVER inline in components
```

### Test Conventions (React)

- Use React Testing Library + Vitest.
- Test user behavior, not implementation. Query by role/label, not test IDs.
- Test: renders correctly, user interactions, loading/error states.
- Mock API calls at the network layer (MSW or vi.mock).

---

## Commit & PR Standards

### Commit Messages

```
<type>(<scope>): <short summary>

<optional body — what and why>
```

Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`
Scope: module name or area (`landing`, `contact`, `ui`, `ci`)

Examples:
```
feat(landing): add services detail pages
fix(contact): handle form submission error gracefully
test(ui): add edge case tests for Button component
```

### PR Checklist

- [ ] All tests pass (`npm test`)
- [ ] Lint clean (`npm run lint`)
- [ ] Project builds (`npm run build`)
- [ ] No `TODO` or `FIXME` left untracked
- [ ] Breaking changes called out in PR description
