import Link from 'next/link';
import React from 'react';

type UnderscoreLinkProps = {
  url: string;
  title: string;
};

const UnderscoreLink = ({ url, title }: UnderscoreLinkProps) => {
  return <Link href={url}>{title}</Link>;
};

export default UnderscoreLink;
