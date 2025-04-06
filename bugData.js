const bugData = {
    "P0": {
        "Functional": {
            "Login": [
                "Login/signup not working",
                "Two-factor authentication (2FA) not triggering",
                "User sessions hijacked",
                "Authentication bypass possible",
                "Secure pages accessible without login",
                "Database connection failure",
                "Email verification not completing",
                "Password reset links invalid"
            ],
            "Home": [
                "Site crash on key action",
                "Critical data corruption during save",
                "User stuck in infinite redirect loop",
                "System crashing on high traffic",
                "Site unusable due to memory leaks",
                "Core service outages",
                "Critical third-party integrations failing"
            ],
            "Dashboard": [
                "Real-time updates not syncing",
                "Core feature disabled unexpectedly",
                "Key workflows stuck in loading state",
                "Critical notifications not sending",
                "Dashboard data not loading",
                "API endpoints returning 403 errors",
                "System logging disabled"
            ],
            "Profile": [
                "Account deletion failing silently",
                "User permissions overwritten",
                "User deletion removing unrelated data",
                "Profile data corruption",
                "User roles not applying",
                "Session timeouts locking users out",
                "File uploads crashing server"
            ],
            "Settings": [
                "Critical settings not saving",
                "System configuration corruption",
                "User input sanitization failing",
                "Settings update causing crashes",
                "Multi-user conflicts corrupting data",
                "API authentication tokens not generating",
                "Backup restoration failing"
            ],
            "Reports": [
                "Critical reports not generating",
                "Data export failing mid-process",
                "Report generation crashing server",
                "Database queries timing out",
                "Data migration failing completely",
                "Server returning 500 errors on all requests",
                "Critical data loss during export"
            ],
            "Admin": [
                "Admin unable to access control panel",
                "Payment not processing",
                "Order not placed but amount deducted",
                "Payment gateway rejecting valid cards",
                "Admin commands not executing",
                "Payment refunds not processing",
                "System locking users out randomly"
            ]
        },
        "HTML/UI": {
            "Login": [
                "Login form not appearing",
                "Password fields not masked",
                "Important CTA buttons not clickable",
                "Entire site displaying blank white screen",
                "Forms not rendering on tablets",
                "Buttons unresponsive on all devices",
                "Key inputs not accepting text"
            ],
            "Home": [
                "Homepage banner not displaying",
                "Navigation menu inaccessible",
                "Layout completely broken",
                "Page not rendering at all in any browser",
                "Severe visual distortion on all pages",
                "Images not loading on product pages",
                "Site crashing on resize"
            ],
            "Dashboard": [
                "Dashboard completely blank",
                "Critical metrics not visible",
                "Entire dashboard blank",
                "Page elements flickering uncontrollably",
                "Tables not rendering rows",
                "Critical error messages not showing",
                "UI frozen on load"
            ],
            "Profile": [
                "Profile picture upload broken",
                "User info not displaying",
                "Main content shifted off-screen",
                "Profile images not clickable",
                "Fonts not loading, text invisible",
                "Overlays blocking all clicks",
                "CSS not loading at all"
            ],
            "Settings": [
                "Settings panel not loading",
                "Configuration options invisible",
                "Critical content missing on load",
                "Modal popups blocking all interactions",
                "Buttons missing on mobile view",
                "Text unreadable due to overlap",
                "Site unusable on older browsers"
            ],
            "Reports": [
                "Report viewer broken",
                "Charts not rendering",
                "Payment fields not displaying",
                "Product listings invisible",
                "Entire sidebar missing",
                "Page stuck in infinite scroll loop",
                "Images replaced with broken icons"
            ],
            "Admin": [
                "Admin panel layout broken",
                "User management interface unusable",
                "Checkout form fields not visible",
                "Footer overlapping main content",
                "Header logo not loading",
                "Key sections blacked out",
                "Popups not dismissible"
            ]
        }
    },
    "P1": {
        "Functional": {
            "Login": [
                "Forgot password not working",
                "Email/OTP delays on auth",
                "Password strength validation broken",
                "OTP resend not working",
                "User verification emails bouncing",
                "Multi-language support failing",
                "Session expiration too short"
            ],
            "Home": [
                "Important forms not submitting",
                "Shopping cart not saving items",
                "Search filters not applying",
                "Cart discounts not applying",
                "Filters resetting on refresh",
                "Sorting not persisting",
                "Notifications stuck in queue"
            ],
            "Dashboard": [
                "Role-based access issues",
                "User profile updates not reflecting",
                "Search autocomplete broken",
                "User settings reset randomly",
                "Form submissions timing out",
                "Data sync lagging",
                "Notifications not syncing"
            ],
            "Profile": [
                "Broken API on critical pages",
                "File uploads failing on key features",
                "Profile picture not saving",
                "Comments not posting",
                "Profile edits not syncing",
                "User preferences not saving",
                "Profile updates delayed"
            ],
            "Settings": [
                "Payment gateway timeout errors",
                "Duplicate account creation allowed",
                "User logout not redirecting",
                "API rate limits blocking users",
                "Order history not loading",
                "Email notifications delayed",
                "Settings not applying immediately"
            ],
            "Reports": [
                "User bans not enforcing",
                "Analytics not recording events",
                "Subscription cancellations delayed",
                "File downloads incomplete",
                "Permissions not updating",
                "Admin reports incomplete",
                "Report generation slow"
            ],
            "Admin": [
                "Payment status not updating",
                "User invites not sending",
                "Email templates not rendering",
                "User deletion not logged",
                "API calls dropping intermittently",
                "Checkout stuck on validation",
                "Admin actions not logged"
            ]
        },
        "HTML/UI": {
            "Login": [
                "Major responsiveness issues",
                "Header/Footer not visible on certain screens",
                "Overlapping elements on common devices",
                "Cross-browser layout mismatch",
                "Dropdown menus not expanding",
                "Form fields misaligned on mobile",
                "Key images stretched or distorted"
            ],
            "Home": [
                "Buttons unresponsive on touch devices",
                "Scroll not working on critical sections",
                "Popups not closing on smaller screens",
                "Text truncated on tablets",
                "Navigation bar overlapping content",
                "Images not resizing properly",
                "Buttons too small on mobile"
            ],
            "Dashboard": [
                "Footer links not clickable",
                "Modal windows misaligned",
                "Search bar too narrow",
                "Profile page layout broken",
                "Tables not scrollable on mobile",
                "Input fields overlapping labels",
                "Hover effects not working"
            ],
            "Profile": [
                "Images loading slowly",
                "Checkout steps not visible",
                "Sidebar cut off on small screens",
                "Fonts too small on mobile",
                "Buttons shifting on click",
                "Popups too large for screen",
                "Form labels not aligned"
            ],
            "Settings": [
                "Product cards misaligned",
                "Header text overlapping logo",
                "Scrollbar overlapping content",
                "Images not centered",
                "Dropdowns cut off by edges",
                "Text not wrapping properly",
                "Buttons not styled on Safari"
            ],
            "Reports": [
                "Footer pushed off-screen",
                "Modal backgrounds not dimming",
                "Input fields too wide",
                "Navigation icons misaligned",
                "Tables breaking layout",
                "Images not loading on Edge",
                "Form buttons overlapping"
            ],
            "Admin": [
                "Content shifting on load",
                "Profile images distorted",
                "Search results misaligned",
                "Buttons not visible on scroll",
                "Text overlapping images",
                "Popups not centered",
                "Header not sticky on scroll"
            ]
        }
    },
    "P2": {
        "Functional": {
            "Login": [
                "Incorrect validation error messages",
                "Search returning wrong data",
                "Sorting and filtering not functioning properly",
                "Pagination issues",
                "User preferences not saving correctly",
                "Incorrect timezone handling",
                "Partial data loss in multi-step forms"
            ],
            "Home": [
                "Rate limiting not enforced properly",
                "Notifications not triggering on events",
                "Analytics tracking missing key actions",
                "Comments not displaying in order",
                "File previews not loading",
                "Search suggestions outdated",
                "Form autofill not working"
            ],
            "Dashboard": [
                "User activity logs incomplete",
                "Sorting resets on page change",
                "Filters not saving",
                "Pagination skipping pages",
                "Email links not tracking",
                "Data export missing columns",
                "Profile updates delayed"
            ],
            "Profile": [
                "Search case sensitivity issues",
                "Notifications duplicating",
                "User tags not applying",
                "Form submissions slow",
                "Analytics delayed",
                "File uploads stuck in queue",
                "Sorting not alphabetical"
            ],
            "Settings": [
                "Filters overlapping results",
                "Pagination not resetting",
                "Comments not editable",
                "Search not highlighting terms",
                "User roles partially applied",
                "Notifications not clearing",
                "Data imports missing rows"
            ],
            "Reports": [
                "Profile fields not validating",
                "Search not filtering by date",
                "File downloads slow",
                "Sorting by relevance broken",
                "Filters not clearing",
                "Pagination buttons unresponsive",
                "User preferences resetting"
            ],
            "Admin": [
                "Comments not syncing",
                "Search not handling special characters",
                "Notifications not prioritized",
                "Data exports misformatted",
                "Profile updates not logged",
                "Search results inconsistent",
                "Filters not applying to all data"
            ]
        },
        "HTML/UI": {
            "Login": [
                "Button alignment issues",
                "Font not loading from source",
                "Inconsistent theme use",
                "Broken hover/click effects on secondary elements",
                "Images slightly cropped on certain resolutions",
                "Tooltips not appearing on hover",
                "Table columns misaligned"
            ],
            "Home": [
                "Secondary navigation lagging",
                "Input fields not highlighting on focus",
                "Minor layout shift during page load",
                "Buttons too close together",
                "Text slightly blurry",
                "Icons not centered",
                "Dropdowns slow to open"
            ],
            "Dashboard": [
                "Images not sharp",
                "Hover states delayed",
                "Tables not resizing",
                "Buttons not uniform",
                "Fonts inconsistent across pages",
                "Tooltips overlapping",
                "Images slightly off-center"
            ],
            "Profile": [
                "Navigation links misaligned",
                "Input borders faint",
                "Buttons flickering on hover",
                "Tables not bordered",
                "Dropdowns not styled",
                "Images loading out of order",
                "Hover effects inconsistent"
            ],
            "Settings": [
                "Text not bold where expected",
                "Tooltips too small",
                "Buttons not padded evenly",
                "Navigation bar slightly off",
                "Input fields not styled",
                "Tables overlapping text",
                "Images not aligned with text"
            ],
            "Reports": [
                "Dropdowns not closing",
                "Buttons not highlighted",
                "Fonts not matching design",
                "Tooltips not positioned",
                "Navigation links too small",
                "Input fields misaligned",
                "Tables not scrollable"
            ],
            "Admin": [
                "Images slightly pixelated",
                "Hover effects missing",
                "Text not spaced evenly",
                "Buttons not clickable on edges",
                "Dropdowns overlapping content",
                "Navigation bar not uniform",
                "Input fields too narrow"
            ]
        }
    },
    "P3": {
        "Functional": {
            "Login": [
                "Sessions not clearing on logout",
                "Console warnings with minor impact",
                "Auto-complete not working",
                "Delays in data loading (non-blocking)",
                "Incorrect default sorting on lists",
                "Minor caching issues on refresh",
                "Background sync failing intermittently"
            ],
            "Home": [
                "Optional fields marked as required",
                "Incorrect log timestamps",
                "API rate limit warnings without impact",
                "User preferences not syncing",
                "Search history not saving",
                "Notifications delayed slightly",
                "Form submissions not logged"
            ],
            "Dashboard": [
                "Data exports slow",
                "Profile updates not immediate",
                "Comments not timestamped",
                "Search not saving filters",
                "Sorting not defaulting",
                "File uploads not previewed",
                "Analytics slightly off"
            ],
            "Profile": [
                "User roles not refreshed",
                "Notifications not grouped",
                "Data imports not logged",
                "Profile fields not cleared",
                "Search not caching results",
                "File downloads not tracked",
                "Sorting not saved"
            ],
            "Settings": [
                "Filters not highlighted",
                "Pagination not smooth",
                "Comments not formatted",
                "Search not prioritizing",
                "User tags not synced",
                "Notifications not dismissible",
                "Data exports not zipped"
            ],
            "Reports": [
                "Profile edits not previewed",
                "Search not auto-correcting",
                "File uploads not prioritized",
                "Sorting not customizable",
                "Filters not searchable",
                "Pagination not styled",
                "User preferences not logged"
            ],
            "Admin": [
                "Comments not searchable",
                "Search not handling spaces",
                "Notifications not timed",
                "Data exports not named",
                "Profile updates not notified",
                "Search results not paginated",
                "Filters not defaulted"
            ]
        },
        "HTML/UI": {
            "Login": [
                "Minor spacing issues",
                "Placeholder text missing",
                "Broken minor icons",
                "Animation glitches (non-critical)",
                "Slight color mismatch",
                "Subtle flickering on page transitions",
                "Unstyled fallback font briefly visible"
            ],
            "Home": [
                "Misaligned social media icons",
                "Hover states inconsistent on minor buttons",
                "Small text overflow in edge cases",
                "Buttons slightly off-center",
                "Text not aligned with icons",
                "Icons not sharp",
                "Dropdowns slightly delayed"
            ],
            "Dashboard": [
                "Images not optimized",
                "Hover effects faint",
                "Tables slightly misaligned",
                "Buttons not rounded",
                "Fonts slightly off",
                "Tooltips not styled",
                "Images not flush"
            ],
            "Profile": [
                "Navigation links not spaced",
                "Input fields not padded",
                "Buttons not shadowed",
                "Tables not padded",
                "Dropdowns not highlighted",
                "Images not captioned",
                "Hover effects not smooth"
            ],
            "Settings": [
                "Text not italicized",
                "Tooltips not aligned",
                "Buttons not spaced",
                "Navigation bar not padded",
                "Input fields not bordered",
                "Tables not centered",
                "Images not sized"
            ],
            "Reports": [
                "Dropdowns not shadowed",
                "Buttons not bold",
                "Fonts not uniform",
                "Tooltips not timed",
                "Navigation links not underlined",
                "Input fields not highlighted",
                "Tables not spaced"
            ],
            "Admin": [
                "Images not responsive",
                "Hover effects not timed",
                "Text not justified",
                "Buttons not aligned with text",
                "Dropdowns not padded",
                "Navigation bar not styled",
                "Input fields not sized"
            ]
        }
    },
    "P4": {
        "Functional": {
            "Login": [
                "Typos in system logs",
                "Rare edge case failures",
                "Minor logic errors in admin-only tools",
                "Deprecated API usage",
                "Unhandled exceptions in non-critical scripts",
                "Incorrect sorting in archived data",
                "Debug messages visible in production"
            ],
            "Home": [
                "Minor rounding errors in calculations",
                "Unoptimized database queries (no impact)",
                "Feature flags not toggling off properly",
                "User preferences not logged",
                "Search history not cleared",
                "Notifications not formatted",
                "Form submissions not tracked"
            ],
            "Dashboard": [
                "Data exports not optimized",
                "Profile updates not timestamped",
                "Comments not archived",
                "Search not logging queries",
                "Sorting not logged",
                "File uploads not logged",
                "Analytics not detailed"
            ],
            "Profile": [
                "User roles not logged",
                "Notifications not logged",
                "Data imports not tracked",
                "Profile fields not logged",
                "Search not optimized",
                "File downloads not logged",
                "Sorting not tracked"
            ],
            "Settings": [
                "Filters not logged",
                "Pagination not logged",
                "Comments not logged",
                "Search not tracked",
                "User tags not logged",
                "Notifications not tracked",
                "Data exports not tracked"
            ],
            "Reports": [
                "Profile edits not tracked",
                "Search not logged",
                "File uploads not tracked",
                "Sorting not optimized",
                "Filters not tracked",
                "Pagination not tracked",
                "User preferences not tracked"
            ],
            "Admin": [
                "Comments not tracked",
                "Search not optimized",
                "Notifications not optimized",
                "Data exports not optimized",
                "Profile updates not optimized",
                "Search results not optimized",
                "Filters not optimized"
            ]
        },
        "HTML/UI": {
            "Login": [
                "Pixel-perfect issues",
                "Scrollbar design mismatch",
                "Padding/margin inconsistency",
                "Text capitalization/formatting issues",
                "Favicon not updating in some browsers",
                "Slight shadow misalignment",
                "Unintended line breaks in long text"
            ],
            "Home": [
                "Cursor style inconsistency",
                "Minor z-index layering issues",
                "Subtle gradient rendering differences",
                "Buttons not perfectly round",
                "Text not perfectly centered",
                "Icons not perfectly sized",
                "Dropdowns not perfectly aligned"
            ],
            "Dashboard": [
                "Images not perfectly sharp",
                "Hover effects not perfect",
                "Tables not perfectly spaced",
                "Buttons not perfectly padded",
                "Fonts not perfectly matched",
                "Tooltips not perfectly positioned",
                "Images not perfectly aligned"
            ],
            "Profile": [
                "Navigation links not perfectly spaced",
                "Input fields not perfectly styled",
                "Buttons not perfectly shadowed",
                "Tables not perfectly bordered",
                "Dropdowns not perfectly styled",
                "Images not perfectly captioned",
                "Hover effects not perfectly timed"
            ],
            "Settings": [
                "Text not perfectly formatted",
                "Tooltips not perfectly sized",
                "Buttons not perfectly spaced",
                "Navigation bar not perfectly padded",
                "Input fields not perfectly bordered",
                "Tables not perfectly centered",
                "Images not perfectly sized"
            ],
            "Reports": [
                "Dropdowns not perfectly shadowed",
                "Buttons not perfectly bold",
                "Fonts not perfectly uniform",
                "Tooltips not perfectly timed",
                "Navigation links not perfectly underlined",
                "Input fields not perfectly highlighted",
                "Tables not perfectly padded"
            ],
            "Admin": [
                "Images not perfectly responsive",
                "Hover effects not perfectly smooth",
                "Text not perfectly justified",
                "Buttons not perfectly aligned",
                "Dropdowns not perfectly padded",
                "Navigation bar not perfectly styled",
                "Input fields not perfectly sized"
            ]
        }
    }
}; 