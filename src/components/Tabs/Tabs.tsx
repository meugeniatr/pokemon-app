import React, { ReactNode } from 'react';
import cx from 'classnames';

type TabsProps = {
    tabs: {
        key: string;
        title: ReactNode;
        content: ReactNode;
    }[];
    handleSelect: (tabKey: string) => void;
    activeTabKey?: string;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabKey, handleSelect }) => {
    if (!activeTabKey) {
        activeTabKey = tabs[0].key;
    }
    const content = tabs.find(tab => tab.key === activeTabKey)?.content;
    return (
        <>
            <div className="flex flex-row justify-between w-full">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={cx(
                            'inline-block pb-3 focus:outline-none transition-all duration-100',
                            {'border-b-2 border-primary font-semibold':  tab.key === activeTabKey})
                        }
                        onClick={() => handleSelect(tab.key)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="relative mt-8">
                {content}
            </div>
        </>
    );
}
