import { MenuItem } from 'src/app/shared';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: 'manageCategories',
                parentId: 1
            }
        ]
    },
    {
        id: 1,
        label: 'MENUITEMS.COURSES.TEXT',
        icon: 'bx-video',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.COURSES.LIST.CREATECOURSE',
                link: 'createCourse',
                parentId: 1
            },{
                id: 3,
                label: 'MENUITEMS.COURSES.LIST.EDITCOURSE',
                link: 'editCourse',
                parentId: 1
            },{
                id: 4,
                label: 'MENUITEMS.COURSES.LIST.VIEWCOURSES',
                link: 'viewCourses',
                parentId: 1
            }
        ]
    },
    {
        id: 6,
        label: 'MENUITEMS.TUTORS.TEXT',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.TUTORS.LIST.MANAGETUTORS',
                link: 'manageTutors',
                parentId: 6
            },
            {
                id: 8,
                label: 'MENUITEMS.TUTORS.LIST.REASSIGN',
                link: 'reassignTutors',
                parentId: 6
            }
        ]
    },
    {
        id: 26,
        label: 'MENUITEMS.STUDENT.TEXT',
        icon: 'bx-customize',
        subItems: [
            {
                id: 27,
                label: 'MENUITEMS.STUDENT.LIST.MANAGESTUDENTS',
                link: 'manageStudents',
                parentId: 26
            },
            {
                id: 28,
                label: 'MENUITEMS.STUDENT.LIST.ASSIGNCOURSE',
                link: 'assignCourse',
                parentId: 26
            },
            {
                id: 29,
                label: 'MENUITEMS.STUDENT.LIST.REMOVESTUDENTFROMCOURSE',
                link: 'removeStudentFromCourse',
                parentId: 26
            }
        ]
    },{
        id: 26,
        label: 'MENUITEMS.USERS.TEXT',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 27,
                label: 'MENUITEMS.USERS.LIST.ASSIGNROLE',
                link: 'assignRole',
                parentId: 26
            },
            {
                id: 28,
                label: 'MENUITEMS.USERS.LIST.MANAGEUSERS',
                link: 'manageUsers',
                parentId: 26
            }
        ]
    }/*,
    {
        id: 71,
        icon: 'bx-collection',
        label: 'MENUITEMS.COMPONENTS.TEXT',
        subItems: [
            {
                id: 72,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 73,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/form/elements',
                        parentId: 72
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/form/validation',
                        parentId: 72
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/form/advanced',
                        parentId: 72
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/form/editor',
                        parentId: 72
                    },
                    {
                        id: 77,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/form/uploads',
                        parentId: 72
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '/form/repeater',
                        parentId: 72
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/form/wizard',
                        parentId: 72
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/form/mask',
                        parentId: 72
                    }
                ]
            },
            {
                id: 81,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 82,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/tables/basic',
                        parentId: 81
                    },
                    {
                        id: 83,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/tables/advanced',
                        parentId: 81
                    }
                ]
            },
            {
                id: 84,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 85,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/charts/apex',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/charts/chartjs',
                        parentId: 84
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '/charts/chartist',
                        parentId: 84
                    },
                    {
                        id: 88,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/charts/echart',
                        parentId: 84
                    }
                ]
            },
            {
                id: 89,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 90,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/icons/boxicons',
                        parentId: 89
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/icons/materialdesign',
                        parentId: 89
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/icons/dripicons',
                        parentId: 89
                    },
                    {
                        id: 93,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/icons/fontawesome',
                        parentId: 89
                    },
                ]
            },
            {
                id: 94,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 95,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/maps/google',
                        parentId: 94
                    }
                ]
            }
        ]
    },
    {
        id: 96,
        label: 'HEADER.EXTRA_PAGES.TITLE',
        icon: 'bx-file',
        subItems: [
            {
                id: 97,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 98,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/invoices/list',
                        parentId: 97
                    },
                    {
                        id: 99,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/invoices/detail',
                        parentId: 97
                    },
                ]
            },
            {
                id: 100,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 101,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/pages/login-1',
                        parentId: 100
                    },
                    {
                        id: 102,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                        link: '/pages/login-2',
                        parentId: 100
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/pages/register-1',
                        parentId: 100
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                        link: '/pages/register-2',
                        parentId: 100
                    },
                    {
                        id: 104,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/pages/recoverpwd-1',
                        parentId: 100
                    },
                    {
                        id: 105,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                        link: '/pages/recoverpwd-2',
                        parentId: 100
                    },
                    {
                        id: 106,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/pages/lock-screen-1',
                        parentId: 100
                    },
                    {
                        id: 107,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                        link: '/pages/lock-screen-2',
                        parentId: 100
                    },
                    {
                        id: 108,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                        link: '/pages/confirm-mail',
                        parentId: 100
                    },
                    {
                        id: 109,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                        link: '/pages/confirm-mail-2',
                        parentId: 100
                    },
                    {
                        id: 110,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                        link: '/pages/email-verification',
                        parentId: 100
                    },
                    {
                        id: 111,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                        link: '/pages/email-verification-2',
                        parentId: 100
                    },
                    {
                        id: 112,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                        link: '/pages/two-step-verification',
                        parentId: 100
                    },
                    {
                        id: 113,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                        link: '/pages/two-step-verification-2',
                        parentId: 100
                    }
                ]
            },
            {
                id: 114,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 115,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/pages/starter',
                        parentId: 114
                    },
                    {
                        id: 116,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/pages/maintenance',
                        parentId: 114
                    },
                    {
                        id: 117,
                        label: 'Coming Soon',
                        link: '/pages/coming-soon',
                        parentId: 114
                    },
                    {
                        id: 118,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/pages/timeline',
                        parentId: 114
                    },
                    {
                        id: 119,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/pages/faqs',
                        parentId: 114
                    },
                    {
                        id: 120,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/pages/pricing',
                        parentId: 114
                    },
                    {
                        id: 121,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/pages/404',
                        parentId: 114
                    },
                    {
                        id: 122,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/pages/500',
                        parentId: 114
                    },
                ]
            }
        ]
    } */
];

