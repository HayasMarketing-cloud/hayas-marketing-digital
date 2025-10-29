import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RedirectRule {
  id: string;
  source: string;
  destination: string;
  type: string;
  category: string;
}

interface RedirectTableProps {
  redirects: RedirectRule[];
  categories: string[];
}

const getCategoryBadgeColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Servicios sin /es/': 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
    'Blog Posts sin /es/': 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
    'Blog Posts Legacy': 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
    'URLs Truncadas': 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300',
    'URLs Malformadas': 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    'Institucionales sin /es/': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
    'Kit Digital': 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300',
    'Splat Rules': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    'Home y Raíz': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
    'Idiomas Legacy': 'bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-300',
    'Contenido Eliminado': 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
  };
  
  return colorMap[category] || '';
};

export const RedirectTable: React.FC<RedirectTableProps> = ({ redirects, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filtered = useMemo(() => {
    return redirects.filter(redirect => {
      const matchesSearch = searchTerm === '' || 
        redirect.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        redirect.destination.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        redirect.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [redirects, searchTerm, selectedCategory]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Redirecciones Activas ({filtered.length}/{redirects.length})</span>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar URL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Origen</TableHead>
                <TableHead className="w-[40%]">Destino</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Categoría</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    No se encontraron redirecciones
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((redirect) => (
                  <TableRow key={redirect.id}>
                    <TableCell className="font-mono text-xs">
                      {redirect.source}
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        {redirect.destination}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={redirect.type === '301' ? 'default' : redirect.type === '302' ? 'secondary' : 'outline'}
                      >
                        {redirect.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={getCategoryBadgeColor(redirect.category)}
                      >
                        {redirect.category}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
