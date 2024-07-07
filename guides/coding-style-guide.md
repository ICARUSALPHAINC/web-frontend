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
- **Install any missing packages from package.json**:
  ```sh
  npm install
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

> **Important:** There is an envConfig.js file where all environment variables from .env
> are loaded into objects. These should be imported from envConfig.js in your components.

## Project Structure

Here is a detailed explanation of our project structure:

- **/src**
    - **assets**
        - Contains assets needed for the project
        
        - Subdirectories for asset types (e.g., `logo/`).
          ```
          src/
          └── assets/
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
              ├── AuthProvider.jsx
              └── ThemeProvider.jsx
          ```
    - **layouts**
      - App layout wrappers
        ```
        src/
          └── contexts/
              ├── MainLayout.jsx
              ├── DesktopLayout.jsx
              └── MobileLayout.js
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

  **Example jsx wrappers**:
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

  **Example Service Files**:
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

- **Component Comments**: At the top of each file, add a comment explaining the file's purpose, doc comments for the functions itself are optional for components but still recommended.

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
  - Wrap the app in the useContext inside `index.js`. Avoid other coding in `index.js` (exceptions for themes and components controlled / altered with `useEffect` or other functions which will be wrapped inside App.js instead).
- **App Component**: 
  - Wrap with the theme provider in `App.js`. Use `App.js` primarily for routing; functions and `useEffect` hooks can be added as necessary.
- **Copy Style**: 
  - If the coding style for certain coding practices isn't mentioned in this document then - when in doubt, copy the coding style from other files in the project.
- **Routes and other Configs**: 
  - Located in `/configs`.
- **Default Theme**: 
  - Provided via a theme provider in the app.
- **Material UI**: 
    <!--- TODO: add better examples here --->
  - Use Material UI components instead of standard HTML JSX or CSS. Use the `sx` prop for inline styles. Use `<Box>` instead of `<div>` for wrappers.
  - SX Prop is similar to CSS with the difference being name styles are inside json objects with key's written in camelCase instead of kebab-style, but with their strings being in CSS kebab-style.
  - Don't return any written material that is not wrapped under typography or a part of another component (texts inside buttons / other elements are acceptable exceptions).
  - For typography components, use `body1` or `body2` for the variant, don't leave variant blank.
  - If any component has color that is used in multiple places, add the theme to `primaryTheme` and use the color name inherited from theme provider.
  - > **Important:** For CSS/SX font sizes always use `rem` instead of `px`.

  **Material UI Theme Provider Example**:
  - For each example below, the component is wrapped inside a theme provider
  - Example theme:
  - ```jsx
    import { createTheme, responsiveFontSizes } from "@mui/material";
    
    let theme= createTheme({
    breakpoints:{
        values: {
            xs: 0,     // Extra-small devices (phones)
            sm: 750,   // Small devices (tablets)
            md: 1200,  // Medium devices (desktops)
            lg: 1280,  // Large devices (large desktops)
            xl: 1920,  // Extra-large devices (very large screens)
        },
    }, // end of breakpoints
    
    palette: {
        mode: 'default',
    
        primary: {
            main: '#ff5aa7', // From --title-gradient start
            light: '#f7a059', // From --title-gradient end
            dark: '#ff5aa7',
            contrastText: '#ffffff',
        },
    
        // Secondary, background, text, etc. themes
        
        myRandomTheme: {
            myColor: '#hex-code-here',
        },
    
        appBar: {
            background: 'linear-gradient(to right, #ff5aa7, #f7a059)',
        },
        
    }, // End of pallete
    
    typography: {
        fontFamily: 'fontname, alternative-font',
        h1: {
            fontFamily: 'fontname',
            fontWeight: 100,
            fontSize: '2rem',
            background: '#color-hex-code',
            // Other css properties
        },
        // Other typographies
    },
    }); // end of typographies
    
    theme = responsiveFontSizes(theme);
    
    export {theme};
    ```
    - Theme Provider wrapper example
    ```jsx
    import {CssBaseline, ThemeProvider} from "@mui/material";
    
    function App() {
    return (
        // Provide theme
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* App Content goes here */}
        </ThemeProvider>
    );
    }   
    ```

    - Usage

      - Regular usage
      ```jsx
      import { Box, Typography } from '@mui/material';
      const ExampleComponent = () => {
          return (<>
              <Box sx={{ 
                  background: 'primary.main' 
              }}>
                  This Box's background uses the primary color from the theme!
              </Box>
              <Typography variant='h2' component='h1'>
                 This text is rendered with default settings of a h2 component
                 but has the h1 HTML tag so that screen readers recognize this as a h1.
              </Typography>
              <Box sx={{
                  background: 'myRandomTheme.MyColor',
                }}>
                This box's background uses the custom color I created!
              </Box>
          </>);
      };
      ```
      - When regular usage practices don't work, how to use it like a variable prop.
      ```jsx 
      import { Box } from '@mui/material';
      import { useTheme } from '@mui/system';

      const ExampleComponent = () => {
          const theme = useTheme();
          return (
              <AppBar position="static" sx={{
              background: `${theme.palette.appBar.background}`,
          }}>
            Components in this app bar use the complex gradient 
            but since it can't be inherited normally using the theme, 
            it calls it as a string variable and places it here so 
            it can be called in a way similar to a variable.
          </AppBar>
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