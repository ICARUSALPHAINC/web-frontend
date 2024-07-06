<!--- Disclaimer: Although this file was modified by ChatGPT for concision, it was written mostly manually  --->

# Icarus, Web Development Team Coding Style Guidelines

Welcome to the Web Team! This document outlines the coding style guidelines for our React projects. 
These guidelines ensure consistency, readability, and maintainability in our codebase, especially 
since many of us are new to React.

## Package Management

- **Use NPM**: For consistency, always use NPM for managing packages. 
- Do not use Yarn or other package managers.

### Basic NPM Tips

- **Run React with NPM**:
  ```sh
  npm start
  ```
- **Install Packages**:
  ```sh
  npm install <package-name>
  ```
- **Set up `.gitignore`**: Create a `.gitignore` file to specify files and directories that should not be tracked by Git.
- **When to add a file to `.gitignore`**: Add files that are environment-specific, build artifacts, or dependencies (e.g., `node_modules`, `.env`).

  **Example `.gitignore`**:
  ```.gitignore
  node_modules/
  .env
  dist/
  ```

### Environment variables `.env` and `.env-sample`

**.env**:
```
REACT_APP_API_KEY=your-api-key
REACT_APP_API_SECRET=your-api-secret
```

**.env-sample**:
```
REACT_APP_API_KEY=your-api-key
REACT_APP_API_SECRET=your-api-secret
```
> **Note**: Ensure that sensitive information such as API keys and secrets are removed from the `.env-sample`
> file and replaced with placeholders to prevent accidental exposure.

## Project Structure

Here is a detailed explanation of our project structure:

- **/src**
    - **assets**
        - Main file: `assets.js`, which imports assets from an object.
          ```jsx
          // assets.js
          import logo from './logo/logo.png';
    
          export const logo = {
              png: {
              16: './logo/favicon-16x16.png',
              32: './logo/favicon-32x32.png',
              192: './logo/192.png',
              512: './logo/logo512.png',
              },
            };
          ```
          > **Note:** logo.png.16 doesn't work due to numeric conventions, so use logo.png[16] instead.
        
          > **Important:** There is an envConfig.js file where all environment variables from .env 
          > are loaded into objects. These should be imported from envConfig.js in your components.
        - Subdirectories for asset types (e.g., `logo/`).
          ```
          src/
          └── assets/
              ├── assets.js
              └── logo/
                  └── logo.png
          ```
    - **components**
        - Contains all UI components. These may have subdirectories as necessary.
          ```
          src/
          └── components/
              ├── Button.jsx
              └── Header/
                  └── Header.jsx
          ```
    - **configs**
        - Configuration files for the app.
          ```
          src/
          └── configs/
              ├── routes.js
              └── theme.js
          ```
    - **contexts**
        - App context providers.
          ```
          src/
          └── contexts/
              ├── AuthProvider.js
              └── ThemeProvider.js
          ```
    - **screens**
        - Similar to pages on a website.
          ```
          src/
          └── screens/
              ├── Home.jsx
              ├── Team.jsx
              └── Profile.jsx
          ```

- **public**
    - Generally, do not add anything here unless it’s necessary for the build process.

## Documentation and Comments

- **Proper Documentation**: Provide doc comments for clarity.

  **Example**:
  ```jsx
  // useContextExample for a global dialogue context in the app.

  /** 
   * Provider component that manages the state of dialogs in the application.
   * @param {Object} children - Child components that may trigger dialogs.
   * @returns {JSX.Element} - The provider that manages dialog visibility.
   */
  export const DialogueProvider = ({ children }) => {
      const [isSetProfileDialogOpen, setProfileDialogOpen] = useState(false);
      const [progress, setProgress] = useState(0);

      const value = {
          isSetProfileDialogOpen,
          openProfileDialogue: () => setProfileDialogOpen(true),
          closeProfileDialogue: () => setProfileDialogOpen(false),
          progress,
          setProgress,
      };

      return (
          <DialogContext.Provider value={value}>
              {children}
          </DialogContext.Provider>
      );
  };
  ```

  **Example Service File**:
  ```jsx
  // createPost function in the services directory as postService.js

  /**
   * Creates a new post in Firestore.
   * @param {string} userId - The user's ID.
   * @param {string} title - The title of the post.
   * @param {string} body - The body content of the post.
   * @returns {Promise<string>} - The ID of the created post, or an error.
   */
  export async function createPost(userId, title, body) {
      try {
          if (!userId || !title || !body) {
              throw new Error('custom/incomplete-fields');
          }

          if (title.length < 20) {
              throw new Error('custom/post-title-short');
          }
          if (body.length < 30) {
              throw new Error('custom/post-body-short');
          }

          const postRef = collection(firestore, 'posts');
          const newPost = {
              userId,
              title,
              body,
              createdAt: Timestamp.now()
          };

          const docRef = await addDoc(postRef, newPost);
          return docRef.id;
      } catch (error) {
          console.error('Error creating post:', error);
          return errorHandling(error.code || error.message);
      }
  }
  ```

- **Component Comments**: At the top of each file, add a comment explaining the file's purpose.

  **Example**:
  ```jsx
  // LogInComp.jsx - Component for user login.
  // Provides a form for users to enter their credentials and log in to the application.
  ```

- **Inline Comments**: If something is ambiguous or complex, add short comments to explain.

- **Naming Conventions**:
    - Service files: `xyzService`
    - Context providers: `xyzProvider`

## Coding Style

- **Naming Conventions**: 
  - Use camelCase for variable, function, and file names.
  - Use UpperCase for React Components, and their file names.
- **Functional Programming**: 
  - Prefer functional programming over object-oriented programming, except where it simplifies the code.
- **Hooks and States**: 
  - Use hooks and states for anything that can change during rendering.
- **useContext**: 
  - Wrap the app in the useContext inside `index.js`. Avoid other coding in `index.js` (exceptions for themes controlled with `useEffect`).
- **App Component**: 
  - Wrap with the theme provider in `App.js`. Use `App.js` primarily for routing; functions and `useEffect` hooks can be added as necessary.
- **Copy Style**: 
  - When in doubt, copy the coding style from other files in the project.
- **Routes and Configs**: 
  - Located in `/configs`.
- **Default Theme**: 
  - Provided via a theme provider in the app.
- **Material UI**: 
  - Use Material UI components instead of standard HTML JSX or CSS. Use the `sx` prop for inline styles. Use `<Box>` instead of `<div>` for wrappers.
  - SX Prop is similar to CSS with the difference being name styles are inside json objects with key's written in camelCase instead of kebab-style, but with their strings being in CSS kebab-style.
  - > **Important:** For CSS/SX font sizes always use `rem` instead of `px`.

    **Example with Theme Provider**:
    ```jsx
    import { Box } from '@mui/material';
    import { useTheme } from '@mui/system';

    const ExampleComponent = () => {
        const theme = useTheme();
        return (
            <Box sx={{ 
                color: 'primary.main' 
            }}>
                This text uses the primary color from the theme!
            </Box>
        );
    };
    ```

- **No Hardcoding**: Do not hardcode colors, routes, or similar items. Import them from the relevant directories for easy updates.

## GitHub Guidelines (General)

- **Feature Assignment**: 
  - Each developer will be assigned specific features within certain files. Adhere strictly to function signatures and return types if specified.
- **Branching**: 
  - Use separate branches for different features. Commit and push to your branch as necessary. Once your feature is done, thoroughly test it, push it, submit a pull request, and notify us on Discord. We will handle merging, staging, and deployment.
- **Branch Discipline**: 
  - Do not mess with other branches. Communicate on Discord if you need to modify unassigned files. Creating new files is acceptable if they follow the coding guidelines.
- **Node Modules**: 
  - Never commit `node_modules` (seriously, it might just be faster to hand-deliver them on a USB stick 😄, just use `npm install` from package.json lol).
- **package.json**
  - Changes: Any changes to package.json and package installations should be discussed on Discord first. This ensures that all dependencies are necessary, compatible, and avoid potential conflicts in the project.

## GitHub Guidelines (Commits)

These guidelines aren't really important, just recommended. 

These guidelines apply primarily to the main, staging, and production branches. 

For feature branches, we will be squashing commits and merging them, so these commit message guidelines are not as stringent.

While it is still recommended to follow the guidelines for consistency, feel free to use basic commit messages, as long as they are coherent, in your feature branches.

1. **Use the Imperative Mood**: Treat your commit messages as commands. For example, use "Add feature" instead of "Added feature" or "Adding feature".
2. **Keep Messages Short and Descriptive**: Aim for around 50 characters in the subject line. If more detail is needed, add a body after a blank line.
3. **Capitalize the Subject Line**: Capitalize the first letter of the subject line.
4. **Reference Issues or Tickets**: If applicable, reference the issue or ticket number in the commit message.
5. **Use Consistent Prefixes**: Use prefixes to indicate the type of commit. For example:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation changes
    - `style`: Code style changes (formatting, missing semi-colons, etc.)
    - `refactor`: Refactoring code (no functional changes)
    - `test`: Adding or updating tests
    - `chore`: Maintenance tasks (updating build scripts, etc.)

### Examples

- **Adding a new feature**:
  ```
  feat: Add user authentication feature
  ```

- **Fixing a bug**:
  ```
  fix: Resolve login issue on the home page
  ```

- **Updating documentation**:
  ```
  docs: Update README with setup instructions
  ```

- **Refactoring code**:
  ```
  refactor: Simplify login logic
  ```

- **Style changes**:
  ```
  style: Format code according to ESLint rules
  ```

- **Referencing an issue**:
  ```
  fix: Resolve login issue on the home page (#42)
  ```


## Communication

- If something noted as "unless necessary" seems appropriate, do not hesitate. Communicate with us—some methods might genuinely be easier. These guidelines are for typical scenarios, not exceptions. We're all learning here.


## Using ChatGPT and Stack Overflow
- Using resources like ChatGPT and Stack Overflow is perfectly fine as long as the solutions you find fit the coding criteria, and you genuinely understand what is going on. Do not copy-paste code blindly, as sometimes the code generated by these tools can break the project. Always ensure you comprehend the solution and test it thoroughly.
- Do not, however, build a reliance on those tools and only use them as a supplement. We still need you to know how to code lol.

Welcome aboard, and happy coding!